<template>
  <div class="post">
    <div class="card mb-3" style=" border-radius: 15px;">
      <div class="card-header bg-transparent">
        <img src="/src/images/img.jpg" alt="" style="width: 40px; border-radius: 20px">
        <p class="card-text ms-2">{{ post.text }}</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Success card title</h5>
        <p class="card-text">{{ post.text }}</p>
      </div>
      <div class="card-footer bg-transparent">
        <p class="link-primary" @click="openPost" style="cursor: pointer">Развернуть комментарии</p>
        <div class="input-group mb-3 mt-3">
          <input type="text" class="form-control" placeholder="Оставить комментарий" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-success" type="button" id="button-addon2">Отправить</button>
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
    }
  },
  methods: {
    openPost() {
      this.$router.push('/posts/' + this.post.id);
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