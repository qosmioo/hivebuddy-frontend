<template>
  <div class="my-navbar">
    <div>HiveBuddy</div>
    <my-button @click="$router.push('/posts')">Посты</my-button>
    <my-button @click="$router.push('/about')">О сайте</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style lang="scss" scoped>
.my-navbar {
  background-color: #d5d1ff;
  padding: 10px;
  height: 60px;
  //box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>