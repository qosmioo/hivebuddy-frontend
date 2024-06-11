<template>
  <div class="background">
    <h4 class="mb-3">Командный проект {{ $store.state.teamName }}</h4>
    <div class="d-flex flex-row align-items-center gap-4">
      <h4>Участники</h4>
      <my-button style="background-color: #f6b528" @click="this.$router.push('/member-add')">Добавить участника</my-button>
    </div>
    <div class="form-members">
      <user-list :users="users"></user-list>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import {getUsersByGroupId} from "@/api/api.js";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton, UserList},
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      const res = await getUsersByGroupId(this.$store.state.teamId);
      console.log(res);
      this.users = res;
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

.form-members {
  margin: 20px 30px;
  padding: 10px;
  width: 50%;
  background-color: white;
  border: 1px rgba(0, 0, 0, 0.14) solid;;
  border-radius: 15px;
}
</style>