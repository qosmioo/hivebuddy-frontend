<template>
  <user-item
    v-for="user in users"
    :user="user"
    :key="user.id"
    @remove="$emit('remove', user)"
    @click="$emit('userSelected', user)"
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

</style>