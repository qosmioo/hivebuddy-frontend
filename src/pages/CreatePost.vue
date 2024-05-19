<template>
  <div>
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="form">
      <h5>Новый пост</h5>
      <label for="name-input" class="form-label mt-2 fs-5 fw-normal">Название поста</label>
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="description-input" placeholder="Введите название поста" v-model="post.header">
      </div>
      <label for="description-input" class="form-label mt-2 fs-5 fw-normal">Текст поста</label>
      <div class="input-group mb-4">
        <input type="text" class="form-control" id="description-input" placeholder="Введите текст поста" v-model="post.text">
      </div>
      <my-button style="background-color: #f6b528" @click="createPost">Сохранить</my-button>
    </div>
  </div>
</template>

<script>

import {postPost} from "@/api/api.js";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  data() {
    return {
      post: {
        id: "",
        header: "",
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
      const res = postPost(this.post)
      this.$router.push('/feed')
    }
  }
}
</script>

<style>
.form {
  width: 70%;
  margin: 30px 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px rgba(0, 0, 0, 0.14) solid;
  border-radius: 15px;
}
</style>