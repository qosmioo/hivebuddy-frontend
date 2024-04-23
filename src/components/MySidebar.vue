<template>
  <div class="my-sidebar">
    <div class="d-flex flex-sm-column align-items-center sticky-top">
        <my-button href="#news">Лента</my-button>
        <my-button href="#news">Чаты</my-button>
        <my-button href="#news">Доска</my-button>
        <my-button href="#news">Участники</my-button>
        <my-button href="#news">Материалы</my-button>
      
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
/* The side navigation menu */
.my-sidebar {
  width: 150px;
  height: 100%;
  overflow: auto;
}

</style>
