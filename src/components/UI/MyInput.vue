<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}

</script>

<style scoped>
.input {
  width: 70%;
  border: 1px solid black;
  background-color: white;
  border-radius: 15px;
  padding: 10px 15px;
  margin-top: 5px;
}
</style>