<template>
  <div class="profile-settings">
    <h2>Настройки команды</h2>
    <div class="form">
      <div class="container-fluid" style="padding: 20px">
        <div class="row">
          <div class="col-sm-7">
            <label for="name-input" class="form-label fs-5">Название команды</label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" id="name-input" v-model="this.team.name" placeholder="Введите имя">
            </div>
            <label for="description-input" class="form-label mt-2 fs-5">Описание команды</label>
            <div class="input-group mb-4">
              <input type="email" class="form-control" id="description-input" placeholder="Введите описание" v-model="team.description">
            </div>
            <my-button @click="updateTeam">Сохранить</my-button>
            <my-button @click="deleteTeam" style="background-color: red; ">Удалить</my-button>
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
import {DeleteTeam, getTeamById, PutTeam} from "@/api/api.js";
import {onMounted, ref} from "vue";
const inputRef = ref(null);

export default {
  components: {MyButton, MyHorizontalLine},
  data() {
    return {
      team: {
        id: this.$route.params.id,
        name: "",
        description: "",
        avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userId: this.$store.state.userId
      },
    }
  },
  methods: {
    async updateTeam() {
      const res = await PutTeam(this.team)
      this.$store.commit("setTeam", this.team)
      this.team.name = ""
      this.team.description = ""
      this.$router.go(-1)
    },
    async deleteTeam() {
      this.$store.commit('leaveTeam')
      this.$router.push('/teams')
      const res = await DeleteTeam(this.team.id)
    },
    async fetchTeam() {
      const res = await getTeamById(this.team.id)
      this.team.name = res.name
      this.team.description = res.description
    },
  },
  mounted() {
    this.fetchTeam()
  },

}
</script>

<style lang="scss" scoped>
.form {
  margin: 30px 40px;
  width: 100%;
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