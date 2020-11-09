<template>
  <v-app class="sign-up">
    <div class="login-box">
      <h2>LCH</h2>
      <form class="login-form">
        <v-text-field v-model="name"
                      :error-messages="nameErrors"
                      @input="$v.name.$touch()"
                      @blur="$v.name.$touch()"
                      label="用户名"></v-text-field>
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
                   outlined
                   small
                   color="secondary"
                   :disabled="isSend"
                   @click="sendCode()">发送验证码{{ isSend ? '(' + secondNumber + ')' : '' }}
            </v-btn>
          </div>
        </div>
        <v-text-field type="password"
                      v-model="password"
                      :error-messages="passwordErrors"
                      label="密码"
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"></v-text-field>

        <v-btn class="register-button"
               dark
               color="orange"
               @click="submit()"> 注 册 </v-btn>
        <v-row>
          <v-col cols="6">
            <a @click="returnLogin()">返回登录</a>
          </v-col>
        </v-row>
      </form>
    </div>
  </v-app>
</template>
<script>
import {
  sendVerification,
  checkEmail,
  checkDomain,
  addUser
} from '../system.service';
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  name: 'sign-up',
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    code: { required },
    password: { required }
  },
  data: () => ({
    // 验证码的计算
    isSend: false,
    secondNumber: 0,
    // 表单数据
    name: '',
    email: '',
    code: '',
    password: ''
  }),
  computed: {
    nameErrors () {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push('名称最大为10个字符!');
      !this.$v.name.required && errors.push('用户名不可为空!');
      return errors;
    },
    emailErrors () {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('邮件地址格式不正确!');
      !this.$v.email.required && errors.push('邮箱不可为空!');
      return errors;
    },
    codeErrors () {
      const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push('验证码不能为空!');
      return errors;
    },
    passwordErrors () {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('密码不可为空!');
      return errors;
    }
  },
  methods: {
    /** 发送验证码 */
    sendCode () {
      this.$v.email.$touch();
      // 对email 进行基础验证，满足验证时，将会返回空的数组
      if (this.emailErrors.length === 0) {
        // 检测邮箱是否已经存在
        checkEmail({ email: this.email }).then((res) => {
          if (res.data.code === -100) {
            this.$snackbar.error(res.data.message);
          } else {
            // 发送验证码
            sendVerification({ email: this.email }).then((res) => {
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
        });
      }
    },
    /** 返回登陆 */
    returnLogin () {
      this.$router.push({ name: 'login' });
    },
    /** 注册用户信息 */
    submit () {
      this.$v.$touch();
      if (
        this.nameErrors.length === 0 &&
        this.emailErrors.length === 0 &&
        this.codeErrors.length === 0 &&
        this.passwordErrors.length === 0
      ) {
        checkDomain({ domain: this.name }).then((res) => {
          if (res.data.code === -400) {
            this.$snackbar.error(res.data.message);
          } else {
            addUser({
              domain: this.name,
              email: this.email,
              code: this.code,
              password: this.password
            }).then((res) => {
              if (res.data.code === 0) {
                this.$snackbar.success('注册成功，请登录!');
                this.$router.push({ name: 'login' });
              } else {
                // 验证码错误
                this.$snackbar.error(res.data.message);
              }
            });
          }
        });
      }
    }
  }
};
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
    height: 100% !important;
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
