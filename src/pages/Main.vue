<template>
  <div>
    <my-button @click="login">Log in</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  methods: {
    login() {
      this.$store.commit('login')
      this.$router.push('/teams')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
//href="/teams"
/@click="$store.commit('login')"