<template>
  <top-user-item
      v-for="user in users"
      :user="user"
      :key="user.id"
  />

</template>

<script>
import TopUserItem from "@/components/TopUserItem.vue";

export default {
  components: {TopUserItem},
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