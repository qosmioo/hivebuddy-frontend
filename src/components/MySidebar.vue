<template>
  <div v-if="$store.state.isAuth">
    <div class="my-sidebar">
      <div v-if="$store.state.joinedTeam" class="d-flex flex-sm-column align-items-end sticky-top">
        <div class="sidebar__btn" @click="$router.push('/team/' + $store.state.teamId + '/feed')">
          <img src="/src/images/feed.png" alt="..." style="width: 22px">
          <div class="btn-text">Лента</div>
        </div>
<!--        <div class="sidebar__btn" @click="$router.push('/posts')">-->
<!--          <img src="/src/images/chats.png" alt="..." style="width: 22px">-->
<!--          <div class="btn-text">Чаты</div>-->
<!--        </div>-->
        <div class="sidebar__btn" @click="$router.push('/team/' + $store.state.teamId + '/taskboard')">
          <img src="/src/images/task_2.png" alt="..." style="width: 22px">
          <div class="btn-text">Доска</div>
        </div>
        <div class="sidebar__btn" @click="$router.push('/team/' + $store.state.teamId + '/members')">
          <img src="/src/images/people_2.png" alt="..." style="width: 22px">
          <div class="btn-text">Участники</div>
        </div>
<!--        <div class="sidebar__btn" @click="$router.push('/posts')">-->
<!--          <img src="/src/images/materials.png" alt="..." style="width: 22px">-->
<!--          <div class="btn-text">Материалы</div>-->
<!--        </div>-->
        <div class="sidebar__btn" @click="$router.push('/settings/team/' + $store.state.teamId)">
          <img src="/src/images/settings.png" alt="..." style="width: 22px">
          <div class="btn-text">Настройки</div>
        </div>
      </div>
      <div v-else class="d-flex flex-sm-column align-items-end sticky-top">
        <div class="sidebar__btn" @click="$router.push('/teams')">
          <img src="/src/images/people_2.png" alt="..." style="width: 24px">
          <div class="btn-text">Команды</div>
        </div>
<!--        <div class="sidebar__btn" @click="$router.push('/teams')">-->
<!--          <img src="/src/images/task.png" alt="..." style="width: 24px">-->
<!--          <div class="btn-text">Задачи</div>-->
<!--        </div>-->
<!--        <div class="sidebar__btn" @click="$router.push('/teams')">-->
<!--          <img src="/src/images/teams_archive.png" alt="..." style="width: 24px">-->
<!--          <div class="btn-text">Архив</div>-->
<!--        </div>-->
        <div class="sidebar__btn" @click="$router.push('/settings/profile/' + this.$store.state.userId)">
          <img src="/src/images/settings.png" alt="..." style="width: 24px">
          <div class="btn-text">Настройки</div>
        </div>
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
    },
    leaveTeam() {
      this.$store.commit('leaveTeam')
      this.$router.push('/teams')
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
  margin-top: 8px;
  margin-right: 15px;
  width: 170px;
  height: 43px;
  padding: 10px 15px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer
}

.btn-text {
  margin-left: 5px;
  font-size: 15px;
  font-weight: bolder;
}

.verticalLine {
  width: 1px;
  background-color: rgba(0, 0, 0, 0.11);
  height: 100%;  /* Ограничивается только размером родительского элемента */
}

</style>
