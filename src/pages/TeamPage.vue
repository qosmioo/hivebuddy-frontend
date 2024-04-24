<template>
  <div>
    <h1>Страница с командами</h1>
    <my-button
        @click="showDialog"
    >
      Создать команду
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createTeam"
      />
    </my-dialog>
    <team-list :teams="teams"></team-list>
  </div>
</template>

<script>
import axios from "axios";
import TeamList from "@/components/TeamList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import PostForm from "@/components/PostForm.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

export default {
  components: {MyDialog, PostForm, MyButton, TeamList},
  data() {
    return {
      teams: [],
      dialogVisible: false
    }
  },
  methods: {
    async fetchTeams() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
          params: {
            _limit: 20
          }
        });
        this.teams = response.data;
      } catch (e) {
        alert('Ошибка')
      }
    },
    createTeam(team) {
      this.team.push(team)
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

</style>