<template>
  <div v-if="posts.length > 0" class="post-list">
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @commentAdded="$emit('commentAdded', $event)"
    />
  </div>
  <h2 v-else style="color:green" class="post-list">
    Постов пока нет, будьте первым!
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.post-list{
  margin-bottom: 15px;
  margin-left: 30px;
}
</style>