<template>
  <div class="usr gap-2">
    <img src="/src/images/img.png" alt="..." style="height: 40px; border-radius: 20px">
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
.usr {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
}

.user-person {
  margin: 6px 15px 15px;
}
</style>