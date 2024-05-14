<template>
  <div class="comment">
    <div class="comment-head">
      <img src="/src/images/img.jpg" alt="..." style="height: 40px; border-radius: 20px">
      <p class="mt-3">{{ comment.name }}</p>
    </div>
    <div class="comment-body">
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>

.comment-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.comment-body {
  margin: 6px 15px 15px;
}
</style>