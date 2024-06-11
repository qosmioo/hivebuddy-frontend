<template>
  <div class="board">
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="container taskboard">
      <div class="row">
        <div class="col-sm p-0">
          <h5 class="m-2 ms-5">Новые</h5>
          <hr>
          <task-list :tasks="this.tasks.filter(t => t.status === 'New')"
             @taskGetOlder="handleTaskGetOlder"
             @taskGetYounger="handleTaskGetYounger"
             @taskDeleted="handleTaskDeleted">
          </task-list>
          <my-button @click="$router.push('/task-create')">Создать новую задачу</my-button>
        </div>
        <div class="col-sm p-0">
          <h5 class="m-2 ms-5">Выполняются</h5>
          <hr>
          <task-list :tasks="tasks.filter(t => t.status === 'In-progress')"
             @taskGetOlder="handleTaskGetOlder"
             @taskGetYounger="handleTaskGetYounger"
             @taskDeleted="handleTaskDeleted">>
          </task-list>
        </div>
        <div class="col-sm p-0">
          <h5 class="m-2 ms-5">Выполненные</h5>
          <hr>
          <task-list :tasks="tasks.filter(t => t.status === 'Done')"
             @taskGetOlder="handleTaskGetOlder"
             @taskGetYounger="handleTaskGetYounger"
             @taskDeleted="handleTaskDeleted">>
          </task-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {deleteTaskById, getTasksByGroupId, getUsersByGroupId, putTaskById} from "@/api/api.js";

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
    },
    async handleTaskGetYounger(task) {
      if (task.status === 'In-progress') {
        task.status = 'New';
        await putTaskById(task)
      } else if (task.status === 'Done') {
        task.status = 'In-progress';
        await putTaskById(task)
      }
    },
    async handleTaskGetOlder(task) {
      if (task.status === 'In-progress') {
        task.status = 'Done';
        await putTaskById(task)
      } else if (task.status === 'New') {
        task.status = 'In-progress';
        await putTaskById(task)
      }
      console.log(task)
    },
    async handleTaskDeleted(task) {
      location.reload();
      await deleteTaskById(task.id)
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
  min-width: 900px;
}
.taskboard {
  width: 80%;
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