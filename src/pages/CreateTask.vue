<template>
  <div>
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="form">
      <h5>Новая задача</h5>
      <label for="name-input" class="form-label mt-2 fs-5 fw-normal">Название задачи</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="description-input" placeholder="Введите название задачи" v-model="task.name">
      </div>
      <label for="description-input" class="form-label mt-2 fs-5 fw-normal">Описание задачи</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="description-input" placeholder="Введите описание задачи" v-model="task.description">
      </div>
      <label for="user-input" class="form-label mt-2 fs-5 fw-normal">Исполнитель</label>
      <user-list :users="users" @userSelected="handleUserSelected"></user-list>
      <p v-if="selectedUser">Выбранный пользователь: {{ selectedUser.name }}</p>
      <my-button style="background-color: #f6b528" @click="createTask">Сохранить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import {getUsersByGroupId, postTask} from "@/api/api.js";
import UserList from "@/components/UserList.vue";

export default {
  components: {UserList, MyButton},
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
      },
      users: [],
      selectedUser: null
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
    async createTask() {
      this.task.id = this.generateUUID();
      this.task.status = "new"
      this.task.createdAt = "2024-05-17";
      this.task.creator = this.$store.state.userId;
      this.task.groupId = this.$store.state.teamId;
      console.log(this.task)
      this.task.userId = this.selectedUser.id;
      if (this.task.user === null) {
        alert('No user selected')
      } else {
        const res = await postTask(this.task);
        // this.$router.push('/team/' + this.$store.state.teamId + '/taskboard')
        console.log(this.task);
        console.log(res);
      }

    },
    async fetchUsers() {
      this.users = await getUsersByGroupId(this.$store.state.teamId);
    },
    handleUserSelected(user) {
      this.selectedUser = user;
    }
  },
  mounted() {
    this.fetchUsers();
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