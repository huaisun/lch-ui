<template>
  <v-app class="forgot-pwd">
    <v-content>
      <div class="login-box">
        <h2>LCH</h2>
        <form class="login-form">
          <v-text-field v-model="email"
                        label="邮箱"
                        :error-messages="emailErrors"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"></v-text-field>
          <div class="lch-row">
            <v-text-field v-model="code"
                          label="验证码"
                          :error-messages="codeErrors"
                          @input="$v.code.$touch()"
                          @blur="$v.code.$touch()"></v-text-field>
            <div class="send-btn">
              <v-btn rounded
                     small
                     outlined
                     :disabled="isSend"
                     @click="sendCode()">发送验证码{{ isSend ? "(" + secondNumber + ")" : "" }}
              </v-btn>
            </div>
          </div>
          <v-text-field type="password"
                        v-model="password"
                        :error-messages="passwordErrors"
                        label="新密码"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"></v-text-field>
          <v-btn class="register-button"
                 dark
                 color="primary"
                 @click="submit()"> 确 认 </v-btn>
          <v-row>
            <v-col cols="6">
              <a @click="returnLogin()">返回登录</a>
            </v-col>
          </v-row>
        </form>
      </div>
    </v-content>
    <v-footer>
      <m-footer></m-footer>
    </v-footer>
  </v-app>
</template>
<script>
import { sendVerification, forgotPwd } from '../system.service';
import { validationMixin } from 'vuelidate';
import { email, required } from 'vuelidate/lib/validators';
import Mfooter from '../footer/m.footer'
export default {
  name: 'forgot-pwd',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    code: { required },
    password: { required }
  },
  components: {
    'm-footer': Mfooter
  },
  data: () => ({
    // 验证码的计算
    isSend: false,
    secondNumber: 0,
    email: '',
    code: '',
    password: ''
  }),
  computed: {
    emailErrors () {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('邮件地址格式不正确!');
      !this.$v.email.required && errors.push('必须输入邮件地址!');
      return errors;
    },
    codeErrors () {
      const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push('必须输入验证码');
      return errors;
    },
    passwordErrors () {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('必须输入密码!');
      return errors;
    }
  },
  methods: {
    /** 发送验证码 */
    sendCode () {
      this.$v.email.$touch();
      // 对email 进行基础验证，满足验证时，将会返回空的数组
      if (this.emailErrors.length === 0) {
        // 发送验证码
        sendVerification({ email: this.email }).then(res => {
          if (res.data.code === 0) {
            this.isSend = true;
            this.secondNumber = 60;
            const timeOut = setInterval(() => {
              if (this.secondNumber <= 0) {
                clearInterval(timeOut);
                this.isSend = false;
              } else {
                this.secondNumber--;
              }
            }, 1000);
          } else {
            this.$snackbar.error(res.data.message);
          }
        });
      }
    },
    /** 返回登陆 */
    returnLogin () {
      this.$router.push({ name: 'login' });
    },
    /** 提交 */
    submit () {
      this.$v.$touch();
      if (
        this.emailErrors.length === 0 &&
        this.passwordErrors.length === 0
      ) {
        forgotPwd({
          email: this.email,
          code: this.code,
          password: this.password
        }).then(res => {
          if (res.data.code === 0) {
            this.$snackbar.success('修改成功!');
            this.$router.push({ name: 'login' });
          } else {
            this.$snackbar.error(res.data.message);
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.login-box h2 {
  text-align: center;
  margin-bottom: 1em;
}

.login-box a {
  font-size: 0.8em;
  color: #bcbcbc;
}

.send-btn {
  padding-top: 1em;
}

.register-button {
  margin-top: 1em;
  width: 100%;
}
@media screen and (max-width: 400px) {
  .login-box {
    width: 100% !important;
  }
}

@media screen and (min-width: 400px) {
  .login-box {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
  }
}
</style>
