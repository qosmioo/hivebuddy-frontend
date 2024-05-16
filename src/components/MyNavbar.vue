<template>
  <div class="my-navbar">
    <div v-if="!$store.state.hideNav">
      <div v-if="$store.state.isAuth">
        <nav class="navbar navbar-light" style="height: 60px">
          <div class="container-fluid">
            <div class="navbar-brand" @click="leaveTeam">
              <img src="/src/images/logo.png" alt="" width="120" height="30" style="cursor: pointer; ">
            </div>
            <div class="d-flex align-items-center gap-2">
              <img src="/src/images/avatar.png" alt="" height="40" style="cursor: pointer; ">
              <a class="link-opacity-100" href="/" @click="$store.commit('logout')">Выход</a>
            </div>
          </div>
        </nav>
        <div class="horizontalLine"></div>
      </div>
    </div>
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
    },
    login() {
      this.$router.push('/login')
    }
  },


}
</script>

<style lang="scss" scoped>
.my-navbar .container-fluid{
  margin-left: 200px;
  margin-right: 200px;
}

.horizontalLine {
  border: none; /* Убираем границу */
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.15); /* Цвет линии */
  height: 1px; /* Толщина линии */
}

.button{
  height: 37px;
  align-content: center;
  width: 130px;
}

</style>