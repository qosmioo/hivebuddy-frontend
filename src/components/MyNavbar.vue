<template>
  <div class="my-navbar">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <divну class="navbar-brand" @click="leaveTeam">
          <img src="./UI/logo.png" alt="" width="120" height="30">
        </divну>
        <a href="/" @click="$store.commit('login')">Выход</a>
      </div>
    </nav>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  methods: {
    leaveTeam() {
      this.$store.commit('leaveTeam');
      this.$router.push('/teams')
    }
  }

}
</script>

<style lang="scss" scoped>
.my-navbar .container-fluid{
  margin-left: 50px;
  margin-right: 50px;
}

</style>