<template>
  <div>
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="form">
      <h5>Добавление юзера</h5>
      <label for="name-input" class="form-label mt-2 fs-5 fw-normal">ID юзера</label>
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="description-input" placeholder="Введите ID юзера" v-model="userId">
      </div>
      <label for="description-input" class="form-label mt-2 fs-5 fw-normal">Роль юзера</label>
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="description-input" placeholder="Введите текст поста" v-model="role">
      </div>
      <my-button style="background-color: #f6b528" @click="addMember">Сохранить</my-button>
    </div>
  </div>
</template>

<script>

import {postUserGroup} from "@/api/api.js";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  data() {
    return {
      userId: "",
      role: ""
    }
  },
  methods: {
    async addMember() {
      this.$router.push({ path: "/team/" + this.$store.state.teamId + 'members'});
      await postUserGroup(this.$store.state.teamId, this.userId, this.role)
    }
  }
}
</script>

<style>
.form {
  width: 70%;
  margin: 30px 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
}
</style>