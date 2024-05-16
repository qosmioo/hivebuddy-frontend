<template>
  <user-item
    v-for="user in users"
    :user="user"
    :key="user.id"
    @remove="$emit('remove', user)"
  />

</template>

<script>
import UserItem from "@/components/UserItem.vue";

export default {
  components: {UserItem},
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.user-list{
  margin: 15px;
}
</style>