<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style>
.button {
  padding: 10px 15px;
  margin-top: 5px;
  background-color: #3b247b;
  color: white;
  border: none;
  border-radius: 15px;
}
</style>