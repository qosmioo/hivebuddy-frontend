<template>
  <div v-if="$store.state.isAuth">
    <div class="my-sidebar">
      <div v-if="$store.state.joinedTeam" class="d-flex flex-sm-column align-items-end sticky-top">
        <div class="sidebar__btn" @click="$router.push('/posts')">Лента</div>
        <div class="sidebar__btn">Чаты</div>
        <div class="sidebar__btn">Доска</div>
        <div class="sidebar__btn">Участники</div>
        <div class="sidebar__btn">Материалы</div>
      </div>
      <div v-else class="d-flex flex-sm-column align-items-end sticky-top">
        <div class="sidebar__btn" @click="joinTeam">В команду</div>
        <div class="sidebar__btn">Настройки</div>
      </div>
<!--      <div class="verticalLine"></div>-->
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {
    MyButton
  },
  methods: {
    joinTeam() {
      this.$store.commit('joinTeam')
      this.$router.push('/posts')
    }
  }
}
</script>

<style>
.my-sidebar {
  height: 80%;
  overflow: auto;
  background-color: white;
  margin-top: 15px;
}

.sidebar__btn {
  margin-top: 5px;
  margin-right: 15px;
  width: 110px;
  padding: 10px 15px;
  background-color: #d5d1ff;
  color: #3b247b;
  border: none;
  border-radius: 15px;
}

.verticalLine {
  width: 1px;
  background-color: rgba(0, 0, 0, 0.11);
  height: 100%;  /* Ограничивается только размером родительского элемента */
}

</style>
