<template>
  <div class="post">
    <h4>Командный проект 5</h4>
    <p>Пост {{ this.post.id }}</p>
    <div class="card mb-3">
      <div class="card-header bg-transparent">
        <img src="/src/images/img.jpg" alt="" style="width: 40px; border-radius: 20px">
        <p class="card-text ms-2">{{ this.post.getUser.name }}</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ this.post.header }}</h5>
        <p class="card-text">{{ this.post.text }}</p>
      </div>
      <div class="card-footer bg-transparent">
<!--        <p class="link-primary">Развернуть комментарии</p>-->
        <CommentList :comments="post.postsFeedbacks"></CommentList>
        <div class="input-group mb-3 mt-3">
          <input type="text" class="form-control" placeholder="Оставить комментарий" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="this.comment.text">
          <button class="btn btn-success" type="button" id="button-addon2" @click="addComment">Отправить</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {getCommentsByPostId, getPostById, postPostFeedback} from "@/api/api.js";
import axios from "axios";
import CommentList from "@/components/CommentList.vue";

export default {
  components: {
    CommentList
  },
  data() {
    return {
      post: {
        id: "",
        header: "",
        text: "",
        photo: "",
        createdAt: "",
        getUser: {
          id: "0",
          password: "",
          email: "",
          telegram: "",
          phone: "",
          avatarId: "",
          tasks: [],
          userChats: [],
          userGroups: []
        },
        groupId: "",
        postsFeedbacks: []
      },
      comment: {
        id: "",
        text: "",
        userId: "",
        createdAt: "",
        postId: ""
      }
    }
  },
  methods: {
    async fetchPost() {
      try {
        this.post = await getPostById(this.$route.params.id)
      }
      catch (error) {
        console.log(error)
      }
      console.log(this.post.postsFeedbacks)
    },
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
    addComment() {
      this.comment.id = this.generateUUID()
      this.comment.userId = this.$store.state.userId
      this.comment.createdAt = "2024-05-17"
      this.comment.postId = this.post.id
      // console.log(this.comment)
      const res = postPostFeedback(this.comment)
      this.comment.text = ""
    }
  },
  mounted() {
    this.fetchPost()
  }

}
</script>

<style>
.post {
  margin-left: 80px;
  width: 600px;
  background-image: url("/src/images/background.png");
  background-size: auto;
  height: 740px;

}

.card-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.input-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>