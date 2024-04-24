<template>
  <div class="my-sidebar">
    <div class="d-flex flex-sm-column align-items-end sticky-top">
      <a class="sidebar__btn" href="/posts">Лента</a>
      <div class="sidebar__btn">Чаты</div>
      <div class="sidebar__btn">Доска</div>
      <div class="sidebar__btn">Участники</div>
      <div class="sidebar__btn">Материалы</div>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {
    MyButton
  }
}
</script>

<style>
.my-sidebar {
  height: 80%;
  overflow: auto;
  background-color: white;
  margin-top: 30px;
}

.sidebar__btn {
  margin-top: 5px;
  width: 110px;
  padding: 10px 15px;
  background-color: #d5d1ff;
  color: #3b247b;
  border: none;
  border-radius: 15px;
}

</style>
