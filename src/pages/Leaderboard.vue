<template>
  <div class="background">
    <h4 class="mb-3">Командный проект {{ $store.state.teamName }}</h4>
    <h4>Топ участников</h4>
    <div class="topform">
      <top-user-list :users="users"></top-user-list>
    </div>
  </div>
</template>

<script>
import TopUserList from "@/components/TopUserList.vue";
import {getTopUsers} from "@/api/api.js";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton, TopUserList},
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      this.users = await getTopUsers();
      console.log(this.users);
    }
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>

<style lang="scss" scoped>
.background {
  min-height: 700px;
  background-image: url("/src/images/background.png");
  background-size: auto;
}

.topform {
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
  background-color: white;
  width: 50%;
  margin: 20px 30px;
  padding: 10px;

}
</style>