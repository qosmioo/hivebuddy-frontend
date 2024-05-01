<template>
  <div class="my-navbar">
    <nav class="navbar navbar-light" style="height: 60px">
      <div class="container-fluid">
        <div class="navbar-brand" @click="leaveTeam">
          <img src="../../public/logo.png" alt="" width="120" height="30">
        </div>
        <a href="/" @click="$store.commit('login')">Выход</a>
      </div>
    </nav>
    <div class="horizontalLine"></div>
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

.horizontalLine {
  border: none; /* Убираем границу */
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.15); /* Цвет линии */
  height: 1px; /* Толщина линии */
}

</style>