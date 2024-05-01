<template>
  <div v-if="teams.length > 0" class="team-list">
    <div class="wrapper">
      <div class="block">
        <team-item
            v-for="team in teams"
            :team="team"
            :key="team.id"
        />
      </div>
    </div>
  </div>
  <h2 v-else style="color:red" class="team-list">
  </h2>
</template>

<script>
import TeamItem from "@/components/TeamItem.vue";

export default {
  components: {TeamItem},
  props: {
    teams: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>


.wrapper, .other {
  display: inline-block;
}

.wrapper {
  width: 100%;
}

.block {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.block div {
  flex-basis: 10%;
  margin: 10px;
}
</style>