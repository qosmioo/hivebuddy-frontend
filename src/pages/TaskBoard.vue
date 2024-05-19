<template>
  <div class="board">
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="container taskboard">
      <div class="row">
        <div class="col-sm p-0">
          <h5 class="m-2 ms-4">Новые</h5>
          <hr>
          <task-list :tasks="this.tasks"></task-list>
          <my-button @click="$router.push('/task-create')">Создать новую задачу</my-button>
        </div>
        <div class="col-sm p-0">
          <h5 class="m-2 ms-4">Выполняются</h5>
          <hr>
<!--          <task-list :tasks="tasks"></task-list>-->
        </div>
        <div class="col-sm p-0">
          <h5 class="m-2 ms-4">Выполненные</h5>
          <hr>
<!--          <task-list :tasks="tasks"></task-list>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {getTasksByGroupId, getUsersByGroupId} from "@/api/api.js";

export default {
  components: {MyButton, TaskList, },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    async fetchTasks() {
      this.tasks = await getTasksByGroupId(this.$store.state.teamId);
      console.log(this.tasks)
    },

  },
  mounted() {
    this.fetchTasks()
  }
}
</script>

<style lang="scss" scoped>
.board {
  background-image: url("/src/images/background.png");
  background-size: cover;
  min-height: 700px;
  min-width: 1000px;
}
.taskboard {
  width: 100%;
  margin: 30px 20px;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
  background-color: white;
}
.verticalLine {
  width: 1px;
  background-color: rgba(0, 0, 0, 0.14);
  height: 100%;  /* Ограничивается только размером родительского элемента */
}
.button {
  background-color: #f6b528;
  margin: 20px;
}
</style>