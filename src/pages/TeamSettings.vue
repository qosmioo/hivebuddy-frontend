<template>
  <div class="profile-settings">
    <h2>Настройки команды</h2>
    <div class="form">
      <div class="container-fluid" style="padding: 20px">
        <div class="row">
          <div class="col-sm-7">
            <label for="name-input" class="form-label fs-5">Название команды</label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" id="name-input" placeholder="Введите название команды">
            </div>
            <label for="description-input" class="form-label mt-2 fs-5">Описание команды</label>
            <div class="input-group mb-4">
              <input type="email" class="form-control" id="description-input" placeholder="Введите почту">
            </div>
            <my-button>Сохранить</my-button>
          </div>
          <div class="col-sm-5">
            <label for="photo-input" class="form-label fs-5 ms-2">Фото профиля</label>
            <img src="/src/images/avatar.png" alt="..." style="width: 150px; margin: 15px 10px 20px">
            <div class="input-group mb-3">
              <input type="file" class="form-control" id="file-input">
              <button class="btn btn-success" type="button" id="inputGroupFileAddon04" style="width: 40px">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyHorizontalLine from "@/components/UI/MyHorizontalLine.vue";

export default {
  components: {MyButton, MyHorizontalLine},
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
      password_confirmation: "",
      photoId: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin: 30px 40px;
  width: 70%;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
  z-index: 0;
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
  height: 740px;
}
</style>