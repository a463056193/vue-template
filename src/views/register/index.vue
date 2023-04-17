<template>
  <div class="register">
    <el-form
      ref="userForm"
      :model="params"
      label-width="80px"
      class="register-form"
    >
      <h1 class="register-title">MAS <router-link to="/login" style="color: green">Sign In</router-link> | <router-link to="/register" style="color: green">Sign Up</router-link></h1>
      <el-form-item
        label="username"
        class="input-prepend restyle"
        prop="username"
        :rules="[
          {
            required: true,
            message: 'please input a valid username',
            trigger: 'blur',
          },
        ]"
      >
        <div>
          <el-input type="text" v-model="params.username" />
        </div>
      </el-form-item>

      <el-form-item
        label="password"
        class="input-prepend"
        prop="password"
        :rules="[
          { required: true, message: 'please input a valid ', trigger: 'blur' },
        ]"
      >
        <div>
          <el-input type="password" v-model="params.password" />
        </div>
      </el-form-item>

      <el-form-item
        label="phone"
        class="input-prepend restyle no-radius"
        prop="mobile"
        :rules="[
          {
            required: true,
            message: 'please input a valid phone number',
            trigger: 'blur',
          },
          { validator: checkPhone, trigger: 'blur' },
        ]"
      >
        <div>
          <el-input type="text" v-model="params.mobile" />
        </div>
      </el-form-item>

      <el-form-item
        label="email"
        class="input-prepend restyle no-radius"
        prop="email"
      >
        <div>
          <el-input type="text" v-model="params.email" />
        </div>
      </el-form-item>

      <el-form-item label="sex" prop="sex">
        <el-radio-group v-model="params.sex">
          <el-radio label="male">male</el-radio>
          <el-radio label="female">female</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- avatar upload, need backend api /api/upload -->
      <el-form-item label="avatar" prop="avatar">
        <el-upload
          class="avatar-uploader"
          action="/api/upload"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
          :on-success="handleAvatarSuccess"
          :on-error="handleAvatarError"
        >
          <img v-if="params.avatar" :src="params.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitRegister()">SignUp</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import registerApi from "@/api/register";

export default {
  data() {
    return {
      params: {
        mobile: "",
        code: "",
        username: "",
        password: "",
        email: "",
        sex: "",
        avatar: "",
      },
      sending: true, //sending v-code
      second: 60, //countdown
      codeTest: "get v-code",
    };
  },
  methods: {
    submitRegister() {
      this.$refs["userForm"].validate((valid) => {
        if (valid) {
          registerApi.submitRegister(this.params).then((response) => {
            this.$message({
              type: "success",
              message: "SignUp success",
            });
            this.$router.push({ path: "/login" });
          });
        }
      });
    },

    checkPhone(rule, value, callback) {
      //debugger
      if (!/^1[34578]\d{9}$/.test(value)) {
        return callback(
          new Error("The format of the mobile number is incorrect")
        );
      }
      return callback();
    },

    handleSubmit() {
      // 提交注册信息的处理逻辑
      // 可以通过 this.registerForm.username、this.registerForm.password、this.registerForm.gender 和 this.registerForm.avatar 获取表单中的信息
      // 可以发送 API 请求将注册信息提交到后端服务器
    },
    beforeAvatarUpload(file) {
      // 头像上传前的处理逻辑
      // 可以进行文件类型、大小等的验证
      // 返回 false 可以阻止文件上传
      return true;
    },
    handleAvatarSuccess(response, file, fileList) {
      // 头像上传成功的处理逻辑
      // 可以通过 response 获取服务器返回的文件路径，更新 this.registerForm.avatar
      this.registerForm.avatar = response.data.url;
    },
    handleAvatarError(error, file, fileList) {
      // 头像上传失败的处理逻辑
    },
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
}

.register-form {
  margin-top: 100px;
}

.register-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

</style>