<template>
  <div class="login">
    <div class="form">
      <img src="/src/images/logo.png" alt="" width="120" height="30" style="margin:15px;">
      <div class="input-group flex-nowrap m-2">
        <input type="email" class="form-control" placeholder="Электронная почта" aria-label="Username" aria-describedby="addon-wrapping" v-model="authData.login">
      </div>
      <div class="input-group flex-nowrap m-2">
        <input type="password" class="form-control" placeholder="Пароль" aria-label="Username" aria-describedby="addon-wrapping" v-model="authData.password">
      </div>
      <my-button @click="login">Войти</my-button>
      <p @click="$router.push('/signup')">У меня нет аккаунта</p>
      <div class="horizontalLine"></div>
      <div class="d-flex align-items-center gap-2">
        <p>Войти с помощью Яндекс ID</p>
        <img src="/src/images/yandexID.png" alt="" width="30" height="30">
      </div>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import {sendLoginRequest} from "@/api/api.js";

export default {
  components: {MyButton},
  data() {
    return {
      authData: {
        login: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      const authData = await sendLoginRequest(this.authData.login, this.authData.password);
      console.log(authData);
      if (!(authData.status === 404) && this.authData.login !== "" && this.authData.password !== "") {
        localStorage.setItem('authData', JSON.stringify(authData));
        console.log(authData);
        this.$router.push('/teams');
      } else {
        console.log(authData);
        this.authData.login = "";
        this.authData.password = "";
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin: 80px auto auto;
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 10px;
}

.input-group {
  width: 90%;
}

.button {
  margin: 8px;
  width: 90%;
  color: white;
  background-color: #f6b528;
}

.horizontalLine {
  background-color: rgba(0, 0, 0, 0.14); /* Цвет линии */
  height: 1px; /* Толщина линии */
  width: 100%;
  margin-top: 8px;
}

p {
  margin: 20px 0 20px 0;
  color: black;
}

.login {
  background-image: url("/src/images/background.png");
  background-size: cover;
  height: 740px;
}
</style>