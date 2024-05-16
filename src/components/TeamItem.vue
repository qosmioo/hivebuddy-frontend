<template>
  <div class="team">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-6">
          <img src="/src/images/img.jpg" alt="..." style="width: 160px; border-radius: 15px">
        </div>
        <div class="col-6">
          <div class="card-body" style="width: 100%; margin-left: 20px">
            <h5 class="card-title mb-3" @click="openTeam" style="cursor: pointer; ">{{ team.name }}</h5>
            <p class="card-text">{{team.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      required: true,
    }
  },
  methods: {
    openTeam() {
      this.$store.commit('setTeam', this.team);
      this.$router.push('/feed');
    }
  }
}
</script>

<style lang="scss" scoped>
//.team {
//  padding: 15px;
//  border: 2px solid grey;
//  border-radius: 10px;
//  margin-top: 15px;
//  display: flex;
//  align-items: center;
//  justify-content: space-between;
//}

.team {
  // position: absolute;
  z-index: 0;
}

.card {
  width: 400px;
  height: 200px;
  border-radius: 15px;
}

.card-body {
  padding: 0;
}
</style>