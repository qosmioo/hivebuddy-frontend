<template>
  <div class="post ms-0">
    <div class="card mb-3" style=" border-radius: 15px;">
      <div class="card-header bg-transparent">
        <img src="/src/images/img.jpg" alt="" style="width: 40px; border-radius: 20px">
        <p class="card-text ms-2">{{ post.getUser.name }}</p>
      </div>
      <div class="card-body">
        <h5 class="card-title" @click="openPost" style="cursor: pointer">{{post.header}}</h5>
        <p class="card-text">{{ post.text }}</p>
      </div>
      <div class="card-footer bg-transparent">
        <div v-if="post.postsFeedBacks.length > 0">
          <p class="link-primary" @click="openPost" style="cursor: pointer">&#8226;{{ post.postsFeedBacks.length }} комментарий. Развернуть комментарии</p>
        </div>
        <div class="input-group mb-3 mt-3">
          <input type="text" class="form-control" placeholder="Оставить комментарий" v-model="this.comment.text">
          <button class="btn btn-success" type="button" id="button-addon2" @click="addComment">Отправить</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
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
    openPost() {
      this.$router.push('/post/' + this.post.id);
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
      this.$emit('commentAdded', this.comment);
      this.comment.text = ""
    }
  }
}
</script>

<style>
.post {
  width: 600px;
}

.horizontalLine {
  border: none; /* Убираем границу */
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.15); /* Цвет линии */
  height: 1px; /* Толщина линии */
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