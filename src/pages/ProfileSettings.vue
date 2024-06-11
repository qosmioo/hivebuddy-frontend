<template>
  <div class="profile-settings">
    <h2>Настройки профиля</h2>
    <div class="form">
      <div class="container-fluid" style="padding: 20px">
        <div class="row">
          <div class="col-sm-8">
            <label for="name-input" class="form-label fs-5">Ваше имя</label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" id="name-input" placeholder="Введите имя" v-model="new_name">
            </div>
            <label for="email-input" class="form-label mt-2 fs-5">Почта</label>
            <div class="input-group mb-4">
              <input type="email" class="form-control" id="email-input" placeholder="Введите почту" v-model="new_email">
            </div>
            <my-button @click="updateProfile">Сохранить</my-button>
          </div>
          <div class="col-sm-4 d-flex flex-column align-items-center">
            <label for="photo-input" class="form-label fs-5 ms-2">Фото профиля</label>
            <img src="/src/images/avatar.png" alt="..." style="width: 150px; margin: 15px 10px 20px">
            <div class="input-group">
              <input type="file" class="form-control" id="file-input">
              <button class="btn btn-success" type="button" id="inputGroupFileAddon04" style="width: 40px">+</button>
            </div>
          </div>
        </div>
      </div>
      <my-horizontal-line></my-horizontal-line>
      <div style="padding: 20px">
        <label for="name-input" class="form-label mb-3 fs-5">Пароль</label>
        <div v-if="this.password_error" style="color: red; margin-bottom: 10px">Плохо!</div>
        <div class="input-group mb-3" style="width: 330px">
          <input type="password" class="form-control" id="old-password-input" placeholder="Введите старый пароль" v-model="old_password">
        </div>
        <div class="input-group mb-4" style="width: 100%">
          <input type="password" class="form-control" id="new-password-input" placeholder="Введите новый пароль" v-model="new_password">
        </div>
        <my-button @click="changePassword">Изменить</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyHorizontalLine from "@/components/UI/MyHorizontalLine.vue";
import {getUserById, putUserById} from "@/api/api.js";

export default {
  components: {MyButton, MyHorizontalLine},
  data() {
    return {
      user: {
        id: "",
        password: "",
        email: "",
        telegram: "",
        name: "",
        phone: "",
        avatarId: ""
      },
      new_name: "",
      new_email: "",
      old_password: "",
      new_password: "",
      password_error: false
    }
  },
  methods: {
    async fetchUser() {
      this.user = await getUserById(this.$store.state.userId);
      this.new_name = this.user.name
      this.new_email = this.user.email
    },
    async updateProfile() {
      if (this.new_name !== "" && this.new_email !== "") {
        this.user.name = this.new_name
        this.user.email = this.new_email
        await putUserById(this.user.id, this.user)
        this.new_name = ""
        this.new_email = ""
      }
    },
    async changePassword() {
      if (this.new_password !== "" && this.old_password === this.user.password) {
        this.user.password = this.new_password;
        await putUserById(this.user.id, this.user)
        this.password_error = false
        this.new_password = ""
        this.old_password = ""
        location.reload();
      } else {
        this.password_error = true
      }
    }
  },
  mounted() {
    this.fetchUser();
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin: 30px 40px;
  width: 80%;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
  z-index: 0;
  background-color: white;
}

input {
  border-radius: 15px;
}

.input-group {
  width: 70%;
}

.button {
  background-color: #f6b528;
  border-radius: 20px;
}

.profile-settings {
  background-image: url("/src/images/background.png");
  background-size: cover;
}
</style>