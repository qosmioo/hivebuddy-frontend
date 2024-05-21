<template>
  <div class="teamPage">
    <my-button
        @click="$router.push('/team-create')"
    >
      Создать новую команду
    </my-button>
    <div v-if="teams.length === 0">
      <h1 style="color: green; margin-left: 30px">Создайте команду!</h1>
    </div>
    <div v-else>
      <team-list :teams="teams"></team-list>
    </div>
  </div>
</template>

<script>
import TeamList from "@/components/TeamList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import PostForm from "@/components/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import TeamForm from "@/components/TeamForm.vue";
import {getTeamsByUserId} from "@/api/api.js";

export default {
  components: {MyDialog, PostForm, MyButton, TeamList, TeamForm},
  data() {
    return {
      teams: [],
      dialogVisible: false
    }
  },
  methods: {
    async fetchTeams() {
      const new_response = await getTeamsByUserId(this.$store.state.userId);

      this.teams = [...new_response]
    },
    createTeam(team) {
      this.teams.push(team)
      this.dialogVisible = false
    },
    showDialog() {
      this.dialogVisible = true
    },
  },
  mounted() {
    this.fetchTeams()
  }
}
</script>

<style lang="scss" scoped>

.button {
  border: 15px;
  background-color: #f6b528;
}

.teamPage {
  background-image: url("/src/images/background.png");
  background-size: cover;
  min-height: 740px;
  min-width: 900px;
  z-index: -1;
}
</style>