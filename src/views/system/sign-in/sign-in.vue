<template>
  <v-app class="sign-up">
    <div class="login-box">
      <h2>LCH</h2>
      <form class="login-form">
        <v-text-field v-model="name"
                      label="用户名"></v-text-field>
        <v-text-field v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      label="密码"
                      :error-messages="error_message"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      @keyup.enter.native="submit()"></v-text-field>

        <v-btn class="login-button"
               outlined
               color="indigo"
               :disabled="!login_active"
               @click="submit()"> 登 录 </v-btn>

        <v-row>
          <v-col cols="6">
            <a class="forgot-class"
               @click="forgotPwd()">忘记密码？</a>
          </v-col>
          <v-col cols="6"
                 class="add-class">
            <a @click="addUser()">加入注册！</a>
          </v-col>
        </v-row>
      </form>
    </div>
  </v-app>
</template>

<script>
import { login } from '../system.service';
import { mapActions } from 'vuex';

export default {
  name: 'sign-in',
  data: () => ({
    // 提交表单
    name: '',
    password: '',
    login_active: false,
    error_message: '',
    showPassword: false
  }),
  watch: {
    password (newPwd, oldPwd) {
      this.login_active = this.name.trim() !== '' && newPwd.trim() !== '';
    },

    name (newName, oldName) {
      this.login_active = this.password.trim() !== '' && newName.trim() !== '';
    }
  },
  created () {
    const user = JSON.parse(localStorage.getItem('LCH__UUSER'));

    if (user != null) {
      // todo 进行密码检测
      const flag = true;
      if (flag) {
        this.$router.push({
          path: '/' + user.domain
        });
        this.updateUser({
          domain: user.domain,
          email: user.email
        });
      }
    }
  },
  methods: {
    ...mapActions(['updateUser']),
    /**
     * 登陆操作
     */
    submit () {
      if (this.login_active) {
        if (this.name.trim() !== '') {
          if (this.password !== '') {
            // 封装数据
            const form = {
              domain: this.name,
              password: this.password
            };
            // 进行登陆
            login(form).then((res) => {
              const result = res.data;
              if (result.code === 0) {
                localStorage.setItem('LCH__UUSER', JSON.stringify(result.data));
                this.$router.push({
                  path: '/' + result.data.domain
                });
              } else {
                this.error_message = res.data.message;
              }
            });
          }
        }
      }
    },

    /**
     * 忘记密码
     */
    forgotPwd () {
      this.$router.push({
        name: 'forgot-pwd'
      });
    },

    /**
     * 注册
     */
    addUser () {
      this.$router.push({
        name: 'sign-up'
      });
    }
  }
};
</script>

<style scoped>
.login-box h2 {
  text-align: center;
  margin-bottom: 1em;
}

.forgot-class {
  color: #bcbcbc;
}

.forgot-class,
.add-class {
  font-size: 0.8em;
}

.add-class {
  text-align: right;
}

.login-button {
  width: 100%;
  margin-top: 1em;
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
