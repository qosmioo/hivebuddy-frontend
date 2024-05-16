<template>
  <div class="user">
      <img src="/src/images/img.jpg" alt="..." style="height: 40px; border-radius: 20px">
      <p class="mt-3">{{ user.name }}</p>
    <p>{{ user.role }}</p>

  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user-person {
  margin: 6px 15px 15px;
}
</style>