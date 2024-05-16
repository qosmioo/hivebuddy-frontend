<template>
  <div class="signup">
    <div class="form">
      <img src="/src/images/logo.png" alt="" width="120" height="30" style="margin:15px;">
      <div class="input-group flex-nowrap m-2">
        <input type="text" class="form-control" placeholder="Имя пользователя" aria-label="Username" aria-describedby="addon-wrapping">
      </div>
      <div class="input-group flex-nowrap m-2">
        <input type="email" class="form-control" placeholder="Электронная почта" aria-label="Username" aria-describedby="addon-wrapping">
      </div>
      <div class="input-group flex-nowrap m-2">
        <input type="password" class="form-control" placeholder="Пароль" aria-label="Username" aria-describedby="addon-wrapping">
      </div>
      <my-button>Зарегистрироваться</my-button>
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

export default {
  components: {MyButton}

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