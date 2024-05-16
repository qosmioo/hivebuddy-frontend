<template>
  <form @submit.prevent>
    <h4>Пишем пост</h4>
    <my-input
      v-focus
      v-model="post.text"
      type="text"
      placeholder="Название"
    />
<!--    <my-input-->
<!--      v-model="post.body"-->
<!--      type="text"-->
<!--      placeholder="Описание"-->
<!--    />-->
    <my-button
      class="btn"
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>

import {postPost} from "@/api/api.js";

export default {
  data() {
    return {
      post: {
        id: "",
        text: "",
        photo: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userId: this.$store.state.userId,
        groupId: this.$store.state.teamId
      }
  }
},
  methods: {
    generateUUID() { // Public Domain/MIT
      let d = new Date().getTime();//Timestamp
      let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16;
        if (d > 0){
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
        } else {
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    },
    createPost() {
      this.post.id = this.generateUUID();
      postPost(this.post)
    }
  }
}
</script>

<style>
form {
  margin: 15px;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
</style>