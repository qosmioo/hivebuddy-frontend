<template>
  <div v-if="tasks.length > 0" class="task-list">
    <task-item
        v-for="task in tasks"
        :task="task"
        :key="task.id"
    />
  </div>
  <p v-else style="color:green" class="task-list">
    Тут пусто!
  </p>
</template>

<script>
import TaskItem from "@/components/TaskItem.vue";

export default {
  components: {TaskItem},
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.task-list {
  margin: 15px;
}
</style>