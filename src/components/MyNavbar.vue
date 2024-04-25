<template>
  <div class="my-navbar">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/teams">
          <img src="./UI/logo.png" alt="" width="120" height="30">
        </a>
        <h5>Профиль</h5>
      </div>
    </nav>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style lang="scss" scoped>
.my-navbar .container-fluid{
  margin-left: 50px;
  margin-right: 50px;
}

</style>