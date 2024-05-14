<template>
  <div class="post">
    <h4>Командный проект 5</h4>
    <p>Пост {{ this.post.id }}</p>
    <div class="card mb-3">
      <div class="card-header bg-transparent">
        <img src="/src/images/img.jpg" alt="" style="width: 40px; border-radius: 20px">
        <p class="card-text ms-2">{{ this.post.text }}</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Success card title</h5>
        <p class="card-text">{{ this.post.text }}</p>
      </div>
      <div class="card-footer bg-transparent">
<!--        <p class="link-primary">Развернуть комментарии</p>-->
        <CommentList :comments="comments"></CommentList>
        <div class="input-group mb-3 mt-3">
          <input type="text" class="form-control" placeholder="Оставить комментарий" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="comment.body">
          <button class="btn btn-success" type="button" id="button-addon2" @click="addComment(this.comment)">Отправить</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {getCommentsByPostId, getPostById} from "@/api/api.js";
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
          userChats: []
        },
        groupId: ""
      },
      comments: [],
      comment: {
        postId: "",
        id: "",
        name: "fedor",
        email: "",
        body: ""
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
      console.log(this.post)
    },
    async fetchComments() {
      try {
        //this.comments = await getCommentsByPostId()
        this.comments = (await axios.get('https://jsonplaceholder.typicode.com/comments', {
          params: {
            _limit: 3
          }
        })).data
      }
      catch(error) {
        console.log(error)
      }
      finally {
        console.log(this.comments)
      }
    },
    addComment(comment) {
      this.comments.push(comment)
    }
  },
  mounted() {
    this.fetchPost()
    this.fetchComments()
  }

}
</script>

<style>
.post {
  margin-left: 80px;
  width: 600px;
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