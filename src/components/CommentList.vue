<template>
  <div>
      <comment-item v-for="comment in comments" :key="comment.id" :comment="comment"/>
  </div>
</template>

<script>
import CommentItem from "@/components/CommentItem.vue";
export default {
  components: {CommentItem},
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>