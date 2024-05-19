<template>
  <my-navbar></my-navbar>
  <div class="container-fluid p-0">
    <div class="row">
      <div v-if="$store.state.isAuth" class="col-sm-3 sticky-top d-flex justify-content-end">
        <my-sidebar></my-sidebar>
        <div class="verticalLine"></div>
      </div>
      <div v-if="$store.state.isAuth" class="col-sm-6 p-3 min-vh-400">
        <div class="app">
          <router-view></router-view>
        </div>
      </div>
      <div v-else>
        <div class="app">
        <router-view></router-view>
      </div></div>
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

.verticalLine {
  width: 1px;
  background-color: rgba(0, 0, 0, 0.11);
  height: 100%;  /* Ограничивается только размером родительского элемента */
}
</style>