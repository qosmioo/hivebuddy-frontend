<template>
  <div>
    <select :value="modelValue" @change="changeOption">
      <option disabled value="">Выберите из списка</option>
      <option v-for="item in options"
              :key="item.value"
              :value="item.value"
      >
        {{ item.name }}
      </option>/
    </select>
  </div>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>