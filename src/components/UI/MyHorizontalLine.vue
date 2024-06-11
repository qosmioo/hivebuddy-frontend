<template>
  <div class="horizontalLine">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-horizontal-line",
}
</script>

<style lang="scss" scoped>
.horizontalLine {
  background-color: rgba(0, 0, 0, 0.14); /* Цвет линии */
  height: 1px; /* Толщина линии */
  width: 100%;
  margin-top: 8px;
}
</style>