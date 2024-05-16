<template>
  <div>
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="form">
      <user-list :users="users"></user-list>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import {getUsersByGroupId} from "@/api/api.js";

export default {
  components: {UserList},
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
.form {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 15px;
}
</style>