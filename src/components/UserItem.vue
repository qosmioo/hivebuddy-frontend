<template>
  <div class="user gap-2">
    <img src="/src/images/img.jpg" alt="..." style="height: 40px; border-radius: 20px">
    <p class="mt-3" style="; cursor: pointer">{{ user.name }}</p>

    <p v-if="user.role==='Crator'" class="mt-3 fw-semibold" style="color: #f6b528">{{ user.role }}</p>
    <p v-else class="mt-3 fw-semibold" style="color: #9d88df">{{ user.role }}</p>
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
  justify-content: flex-end;
}

.user-person {
  margin: 6px 15px 15px;
}
</style>