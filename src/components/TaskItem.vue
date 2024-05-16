<template>
  <div class="task">
    <h5>{{ task.name }}</h5>
    <div class="task-person">
      <img src="/src/images/img.jpg" alt="..." style="height: 40px; border-radius: 20px">
      <p class="mt-3">{{ task.userId }}</p>
    </div>
    <p>{{ task.description }}</p>
    <p>{{ task.createdAt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
}

.task-person {
  margin: 6px 15px 15px;
}
</style>