<template>
  <div class="create-team">
    <h2>Новая команда</h2>
    <div class="form">
      <div class="container-fluid" style="padding: 20px">
        <div class="row">
          <div class="col-sm-7">
            <label for="name-input" class="form-label fs-5">Название команды</label>
            <div class="input-group mb-3">
              <input type="text" class="form-control" id="name-input" placeholder="Введите название команды" v-model="team.name">
            </div>
            <label for="description-input" class="form-label mt-2 fs-5">Описание команды</label>
            <div class="input-group mb-4">
              <input type="email" class="form-control" id="description-input" placeholder="Введите описание команды" v-model="team.description">
            </div>
            <my-button @click="createTeam">Сохранить</my-button>
          </div>
          <div class="col-sm-5">
            <label for="photo-input" class="form-label fs-5 ms-2">Аватарка команды</label>
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
import {PostTeam} from "@/api/api.js";

export default {
  components: {MyButton},
  data() {
    return {
      team: {
        id: "",
        name: "",
        description: "",
        avatarId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userId: ""
      }
    }
  },
  methods: {
    generateUUID() { // Public Domain/MIT
      let d = new Date().getTime();//Timestamp
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
    async createTeam() {
      this.team.id = this.generateUUID()
      this.team.userId = this.$store.state.userId
      const res = await PostTeam(this.team)
      this.$store.commit('setTeam', this.team)
      this.$router.push('/feed')
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

.create-team {
  background-image: url("/src/images/background.png");
  background-size: cover;
  height: 740px;
}
</style>