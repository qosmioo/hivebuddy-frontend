<template>
  <my-navbar></my-navbar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 sticky-top">
        <my-sidebar></my-sidebar>
      </div>
      <div class="col-sm-6 p-3 min-vh-100">
        <div class="app">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyFooter from "@/components/MyFooter.vue";
import MySidebar from "@/components/MySidebar.vue";
export default {
  components: {MyNavbar, MyFooter, MySidebar}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}


</style>