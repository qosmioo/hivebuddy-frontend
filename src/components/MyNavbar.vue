<template>
  <div class="my-navbar">
    <div v-if="!$store.state.hideNav">
      <div v-if="$store.state.isAuth">
        <nav class="navbar navbar-light" style="height: 60px">
          <div class="container-fluid">
            <div class="navbar-brand" @click="leaveTeam">
              <img src="/src/images/logo.png" alt="" width="120" height="30" style="cursor: pointer; ">
            </div>
            <div class="d-flex align-items-center gap-3">
              <div class="d-flex align-items-center flex-column p-0">
                <div class="fw-bold" style="color: #3b247b;">{{this.$store.state.email}}</div>
                <div>{{this.$store.state.username}}</div>
              </div>
              <img src="/src/images/logout.png" @click="logout" alt="..." style="width: 35px; cursor: pointer; ">
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
    },
    logout() {
      this.$store.commit('logout')
      this.$router.push('/')
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