<template>
  <div class="login">
    <el-form
      ref="loginForm"
      :model="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
      label-width="80px"
    >
    <h1 class="login-title">MAS <router-link to="/login" style="color: green">Sign In</router-link> | <router-link to="/register" style="color: green">Sign Up</router-link></h1>
      
      <el-form-item prop="username" label="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
          prefix-icon="el-icon-user-solid"
        />
      </el-form-item>

      <!-- <el-form-item prop="password" label="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
          prefix-icon="el-icon-lock"
        />
        <div>
          <el-input type="password" v-model="loginForm.password" />
        </div>
      </el-form-item> -->

      <el-form-item
        label="password"
        class="input-prepend"
        prop="password"
        :rules="[
          { required: true, message: 'please input a valid password', trigger: 'blur' },
        ]"
      >
        <div>
          <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock"/>
        </div>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >Login</el-button
      >

      <div class="tips">
        <span style="margin-right: 20px">New to MAS?
          <router-link to="/register" style="color: blue">Create an account</router-link>
        </span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { setToken,setAttr } from '@/utils/auth'

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      loginInfo: {}
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
}

.login-form {
  margin-top: 100px;
}

.login-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.form-item-flex {
  display: inline-block;
  align-items: center;
}

.svg-container {
  margin-right: 10px;
}

</style>