<template>
  <div class="control">
    <!-- 登陆界面 -->
    <div v-show="isLogin" class="wapper">
      <h1>待办事项清单</h1>

      <section class="main">
        <input
          type="text"
          v-model="userInfo.username"
          placeholder="请输入用户名"
        />
        <input
          type="password"
          v-model="userInfo.password"
          placeholder="请输入密码"
        />
        <section class="LAC">
          <button class="login" type="submit" @click="login">登录</button>
          <button class="register" type="submit" @click="toRegister">
            注册
          </button>
        </section>
      </section>
    </div>
    <!-- 注册界面 -->
    <div v-show="!isLogin" class="wapper">
      <h1>待办事项清单</h1>
      <section class="main">
        <input
          v-model="userInfo.username"
          type="text"
          id="account"
          placeholder="请输入用户名"
        />
        <input
          v-model="userInfo.password"
          type="password"
          id="password"
          placeholder="请输入密码"
        />
        <input
          v-model="userInfo.email"
          type="email"
          id="email"
          placeholder="请输入邮箱"
        />
        <section class="LAC">
          <button class="login" type="submit" @click="toLogin">登录</button>

          <button class="register" type="submit" @click="register">注册</button>
        </section>
      </section>
    </div>
    <img src="../assets/img/bcc2.webp" class="backgroundImg" />
  </div>
</template>
<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import router from "../router";

let isLogin = ref(true);

// 外部链接
const baseUrl = "http://43.139.99.222:3001";
const loginUrl = baseUrl + "/auth/login";
const userInfo = reactive({
  username: "",
  password: "",
  email: "",
});
// 登录操作
const login = () => {
  // console.log(userInfo);
  if ((userInfo.name !== "") & (userInfo.password !== "")) {
    axios
      .post(loginUrl, {
        name: userInfo.username,
        password: userInfo.password,
      })
      .then((res) => {
        // console.log(res.data);
        window.sessionStorage.setItem("token", res.data.token);
        router.push("/");
      })
      .catch((err) => {
        // console.log(err);
        alert("用户名或密码错误");
      });
  } else {
    alert("用户名和账号不能为空");
  }
};
// 点击显示登录界面
function toLogin() {
  isLogin.value = true;
}
// 点击前往注册界面
function toRegister() {
  isLogin.value = false;
}

// 注册操作
const registerUrl = baseUrl + "/auth/register";
const register = () => {
  if ((userInfo.username !== "") & (userInfo.password !== "")) {
    axios
      .post(registerUrl, {
        name: userInfo.username,
        password: userInfo.password,
        email: userInfo.email,
      })
      .then((res) => {
        console.log(res);
        isLogin.value = true;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("用户名和密码不能为空");
  }
};
</script>
<style lang="scss">
.control {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}
.wapper {
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 2.5rem 5rem 0 rgb(0 0 0 / 10%);
  border-radius: 20px;
  background-color: rgba(185, 185, 185, 0.1);
  backdrop-filter: blur(20px);
  h1 {
    color: #fff;
  }
}
.main {
  width: 85%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    outline: none;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0);
    border-bottom: #fff 2px solid;
    color: #fff;
    &::placeholder {
      font-size: 15px;
      color: #fff;
    }
  }
  .LAC {
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      width: 40%;
      height: 40px;
      border: 0;
      font-size: 20px;
      color: white;
      border-radius: 20px;
    }
  }
}

.login {
  background-color: #4c69ff;
}
.register {
  background-color: #3e3e3e;
}

.backgroundImg {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -999;
}
</style>
