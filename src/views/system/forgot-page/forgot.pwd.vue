<template>
  <v-app class="forgot-pwd">
    <div class="login-box">
      <form class="login-form">
        <v-text-field
          dark
          v-model="email"
          color="#03e9f4"
          label="邮箱"
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <div class="lch-row">
          <v-text-field
            dark
            v-model="code"
            color="#03e9f4"
            label="验证码"
            :error-messages="codeErrors"
            @input="$v.code.$touch()"
            @blur="$v.code.$touch()"
          ></v-text-field>
          <div class="send-btn">
            <v-btn dark rounded small :disabled="isSend" @click="sendCode()"
            >发送验证码{{ isSend ? "(" + secondNumber + ")" : "" }}
            </v-btn>
          </div>
        </div>
        <v-text-field
          dark
          type="password"
          v-model="password"
          color="#03e9f4"
          :error-messages="passwordErrors"
          label="密码"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-row>
          <v-col cols="6" style="text-align: center;">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  icon
                  large
                  color="white"
                  style="margin-top: 30px"
                  v-on="on"
                  @click="returnLogin()"
                >
                  <v-icon dark>undo</v-icon>
                </v-btn>
              </template>
              <span>返回登录</span>
            </v-tooltip>
          </v-col>
          <v-col cols="6">
            <a @click="submit()">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              确 认
            </a>
          </v-col>
        </v-row>
      </form>
    </div>
  </v-app>
</template>
<script>
import { sendVerification, forgotPwd } from "../system.service";
import { validationMixin } from "vuelidate";
import { email, required } from "vuelidate/lib/validators";

export default {
  name: "forgot-pwd",
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    code: { required },
    password: { required }
  },
  data: () => ({
    // 验证码的计算
    isSend: false,
    secondNumber: 0,
    email: "",
    code: "",
    password: ""
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("邮件地址格式不正确!");
      !this.$v.email.required && errors.push("必须输入邮件地址!");
      return errors;
    },
    codeErrors() {
      const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push("必须输入验证码");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("必须输入密码!");
      return errors;
    }
  },
  methods: {
    /** 发送验证码 */
    sendCode() {
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
    returnLogin() {
      this.$router.push({ name: "login" });
    },
    /** 提交 */
    submit() {
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
            this.$snackbar.success("修改成功!");
            this.$router.push({ name: "login" });
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
.send-btn {
  margin: 19px 0 19px 20px;
  width: 120px;
  text-align: right;
}

.forgot-pwd {
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55) !important;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

@media screen and (max-width: 400px) {
  .login-box {
    width: 100% !important;
    height: 100% !important;
  }
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 30px;
  letter-spacing: 4px;
  text-align: center;
  min-width: 125px;
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}
</style>
