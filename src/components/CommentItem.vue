<template>
  <div class="comment">
    <div class="comment-head">
      <img src="/src/images/img.jpg" alt="..." style="height: 40px; border-radius: 20px">
      <p class="mt-3">{{ username }}</p>
    </div>
    <div class="comment-body">
      <p>{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
import {getUserById} from "@/api/api.js";

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      username: ""
    }
  },
  methods: {
    async fetchUser() {
      const user = await getUserById(this.comment.userId);
      this.username = user.name
    }
  },
  mounted() {
    this.fetchUser()
  }
}
</script>

<style lang="scss" scoped>

.comment-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.comment-body {
  margin: 6px 15px 15px;
}
</style>