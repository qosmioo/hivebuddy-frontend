<template>
  <div class="signup">
    <div class="form">
      <img src="/src/images/logo.png" alt="" width="120" height="30" style="margin:15px;">
      <div class="input-group flex-nowrap m-2">
        <input type="text" class="form-control" placeholder="Имя пользователя" aria-label="Username" aria-describedby="addon-wrapping" v-model="user.name">
      </div>
      <div class="input-group flex-nowrap m-2">
        <input type="email" class="form-control" placeholder="Электронная почта" aria-label="Username" aria-describedby="addon-wrapping" v-model="user.email">
      </div>
      <div class="input-group flex-nowrap m-2">
        <input type="password" class="form-control" placeholder="Пароль" aria-label="Username" aria-describedby="addon-wrapping" v-model="user.password">
      </div>
      <my-button @click="addUser">Зарегистрироваться</my-button>
      <p @click="$router.push('/login')" style="cursor: pointer">У меня уже есть аккаунт</p>
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
import {postUser} from "@/api/api.js";

export default {
  components: {MyButton},
  data() {
    return {
      user: {
        id: "",
        password: "",
        email: "",
        telegram: "telegram",
        name: "",
        phone: "89999999999",
        avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    }
  },
  methods: {
    generateUUID() {
      let d = new Date().getTime();
      let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16;
        if (d > 0){
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
        } else {
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    },
    addUser() {
      this.user.id = this.generateUUID();
      console.log(this.user)
      this.$router.push('/login')
      postUser(this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin: 129px auto auto;
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

.signup {
  background-image: url("/src/images/background.png");
  background-size: cover;
  height: 740px;
}
</style>