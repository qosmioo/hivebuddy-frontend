<template>
  <div>
    <my-button href="/teams" @click="$store.commit('login')">teams</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style lang="scss" scoped>

</style>