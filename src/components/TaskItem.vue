<template>
  <div class="task">
    <h5 v-if="task.difficultyLevel==='easy'" class="m-2" style="color: green">{{ task.name }}</h5>
    <h5 v-if="task.difficultyLevel==='medium'" class="m-2" style="color: orange">{{ task.name }}</h5>
    <h5 v-if="task.difficultyLevel==='hard'" class="m-2" style="color: red">{{ task.name }}</h5>
    <div class="task-person">
      <img src="/src/images/img.png" alt="..." style="height: 40px; border-radius: 20px">
      <p class="p-0">{{username}}</p>
    </div>
    <p>{{ task.description }}</p>
    <p class="fw-semibold">{{ task.createdAt.split('.')[0].replace('T', ' ').slice(0, -3) }}</p>
    <div class="d-flex justify-content-around m-1">
      <img src="/src/images/move_left.png" style="width: 40px; height: 40px" alt="..." v-if="this.task.status !== 'new'" @click="updateTaskYounger">
      <img src="/src/images/delete.png" style="width: 40px; height: 40px" alt="..." @click="deleteTask">
      <img src="/src/images/move_right.png" style="width: 40px; height: 40px" alt="..." v-if="this.task.status !== 'done'" @click="updateTaskOlder">
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import {getUserById} from "@/api/api.js";

export default {
  components: {MyButton},
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      username: ""
    }
  },
  methods: {
    updateTaskYounger() {
      this.$emit('taskGetYounger', this.task);
    },
    updateTaskOlder() {
      this.$emit('taskGetOlder', this.task);
    },
    deleteTask() {
      this.$emit('taskDeleted', this.task);
    },
    async fetchUser() {
      const res = await getUserById(this.task.userId)
      console.log(res.name)
      this.username = res.name
    }
  },
  mounted() {
    this.fetchUser();
  }
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #f6b528;
  width: 40px;
  height: 40px;
  margin: 5px;
}
.task {
  display: flex;
  flex-direction: column;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
  margin-bottom: 10px;
}
p {
  margin-left: 8px;
  margin-bottom: 0;
}
.task-person {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 0 8px 5px;
}
</style>