<template>
  <div>
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="form">
      <h5>Новая задача</h5>
      <label for="name-input" class="form-label mt-2 fs-5 fw-normal">Название задачи</label>
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="description-input" placeholder="Введите название задачи" v-model="task.name">
      </div>
      <label for="description-input" class="form-label mt-2 fs-5 fw-normal">Описание задачи</label>
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="description-input" placeholder="Введите описание задачи" v-model="task.description">
      </div>
      <label for="user-input" class="form-label mt-2 fs-5 fw-normal">Исполнитель</label>
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="user-input" placeholder="Введите исполнителя задачи" v-model="task.userId">
      </div>
      <my-button style="background-color: #f6b528" @click="createTask">Сохранить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import {postTask} from "@/api/api.js";

export default {
  components: {MyButton},
  data() {
    return {
      task: {
        id: "",
        name: "",
        description: "",
        status: "",
        createdAt: "",
        creator: "",
        userId: "",
        groupId: "",
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
    createTask() {
      this.task.id = this.generateUUID();
      this.task.status = "new"
      this.task.createdAt = "2024-05-17";
      this.task.creator = this.$store.state.userId;
      this.task.groupId = this.$store.state.teamId;
      console.log(this.task)
      const res = postTask(this.task);
      this.$router.push('/taskboard')
    }
  }
}
</script>

<style lang="scss" scoped>
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