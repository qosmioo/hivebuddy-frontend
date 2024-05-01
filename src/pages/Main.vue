<template>
  <div>
    <my-button @click="login">В команду</my-button>
    <my-button @click="$router.push('/login')">Войти</my-button>
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