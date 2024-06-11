<template>
  <div class="top-usr gap-2">
    <img src="/src/images/img.png" alt="..." style="height: 40px; border-radius: 20px">
    <div  style="; cursor: pointer">{{ user.name }}</div>
    <div class=" fw-semibold" style="color: #9d88df">{{ user.score }} points</div>
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
.top-usr {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 5px 15px;
}


</style>