<template>
  <div class="team">
    <div class="card" style="width: 15rem;">
      <img :src="team.url" class="card-img-top" alt="..." style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title">{{ team.id }}</h5>
        <p class="card-text">{{team.title}}</p>
      </div>
    </div>
<!--    <div>-->
<!--      <div><strong>{{ team.id }}</strong></div>-->
<!--      <div>{{team.title}}</div>-->
<!--    </div>-->
  </div>

</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      required: true,
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
  z-index: -1;
}
</style>