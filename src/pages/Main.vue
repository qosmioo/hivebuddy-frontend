<template>
  <div class="main">
    <p class="title text-center fs-1 fw-bold">BEE PRODUCTIVE</p>
    <p class="title2 text-center mt-3 fs-3 fw-semibold">Пчёлы знают толк в сотрудничестве - давайте следовать их примеру!</p>
    <div class="cards">
      <div class="card p-4" style="width: 16rem; height: 22rem;">
        <img src="../images/people.png" class="card-img-top" alt="..." style="width: 70px; margin: auto">
        <div class="card-body">
          <p class="card-text mt-2 fs-5 fw-bold text-center">Работайте вместе</p>
          <p class="card-text text-center">Общайтесь в чате и
            делитесь материалами с участниками команды</p>
        </div>
      </div>
      <div class="card p-4" style="width: 16rem; height: 22rem">
        <img src="../images/task.png" class="card-img-top" alt="..." style="width: 70px; margin: auto">
        <div class="card-body">
          <p class="card-text mt-2 fs-5 fw-bold text-center">Выполняйте задачи</p>
          <p class="card-text text-center">Эффективно организовывайте командную работу и следите за выполнением задач</p>
        </div>
      </div>
      <div class="card p-4" style="width: 16rem; height: 22rem">
        <img src="../images/progress.png" class="card-img-top" alt="..." style="width: 70px; margin: auto">
        <div class="card-body">
          <p class="card-text mt-2 fs-5 fw-bold text-center">Отслеживайте прогресс</p>
          <p class="card-text text-center">Следите за развитием проектов и оценивайте продвижение своих целей</p>
        </div>
      </div>
    </div>
    <button type="button" class="fw-bold fs-4" @click="$router.push('/login')">НАЧАТЬ РАБОТУ</button>
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
.main {
  margin-top: 77px;
  background-image: url("/src/images/background.png");
  background-size: cover;
  height: 792px;
  z-index: -1;
}

.title {
  color: #f6b528;
}

.title2 {
  color: #9d88df;
}

.cards {
  margin: 70px auto auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 55%;
}
button {
  background-color: #f6b528;
  border: none;
  color: white;
  border-radius: 15px;
  height: 80px;
  width: 300px;
  margin: 70px 42.6%;
}
</style>
