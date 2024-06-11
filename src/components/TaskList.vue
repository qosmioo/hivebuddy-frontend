<template>
  <div v-if="tasks.length > 0" class="task-list">
    <task-item
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @taskGetOlder="$emit('taskGetOlder', $event)"
        @taskGetYounger="$emit('taskGetYounger', $event)"
        @taskDeleted="$emit('taskDeleted', $event)"
    />
  </div>
  <p v-else style="color:green" class="task-list ms-5">
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