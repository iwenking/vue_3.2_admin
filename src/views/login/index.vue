<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginFrom"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <span class="svg-container">
            <svg-icon icon="user"></svg-icon>
          </span>
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginFrom.username"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <span class="svg-container">
            <svg-icon icon="password"></svg-icon>
          </span>
        </span>
        <el-input
          placeholder="password"
          :type="passwordType"
          name="password"
          v-model="loginFrom.password"
        ></el-input>
        <span class="show-pwd">
          <span class="svg-container" @click="onChangepwd">
            <svg-icon
              :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            ></svg-icon>
          </span>
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handlerLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { validatePassword } from "./rules";
import { useStore } from "vuex";
import { setItem } from "@/utils/storage";
import router from "@/router";

const loginFrom = ref({
  username: "supper-admin",
  password: "123456",
});

//验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "用户名为必填项",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword(),
    },
  ],
});

//处理密码文本显示
const passwordType = ref("password");
//template中绑定的方法直接申明即可
const onChangepwd = () => {
  //使用ref声明的数据在script中使用时 需要加value来获取具体的值,但是在template中使用的时候不需要加value
  if (passwordType.value === "password") {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
};
//处理登录
const loading = ref(false);
const store = useStore();
const loginFormRef = ref(null);
const handlerLogin = () => {
  loginFormRef.value.validate((vaild) => {
    if (!vaild) return;
    // loading.value = true;
    // store
    //   .dispatch("user/login", loginFrom.value)
    //   .then(() => {
    //     loading.value = false;
    //   })
    //   .catch((err) => {
    //     loading.value = false;
    //   });
    setItem("token", "Bearer d8c6ed7a-3fd4-46e4-a477-b20d1ce9cda0");
    router.push("/");
  });
};
</script>
<style lang="scss" scoped>
$bg: #2b3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: none;
        border-radius: 0px;
        padding: 12px 5px 12px 5px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
