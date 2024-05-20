<template>
  <div class="task">
    <h5 class="m-2">{{ task.name }}</h5>
    <div class="task-person">
      <img src="/src/images/img.jpg" alt="..." style="height: 40px; border-radius: 20px">
      <p class="p-0">Фёдор</p>
    </div>
    <p>{{ task.description }}</p>
    <p>{{ task.createdAt }}</p>
    <div class="d-flex justify-content-around">
      <my-button @click="updateTask('-')"><</my-button>
      <my-button style="background-color: red" @click="updateTask('x')">x</my-button>
      <my-button @click="updateTask('+')">></my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  methods: {
    updateTask(source) {
      this.$emit('update:task', source, this.task);
    }
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