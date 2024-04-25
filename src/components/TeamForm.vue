<template>
  <form @submit.prevent>
    <h4>Создание команды</h4>
    <my-input
      v-focus
      v-model="team.id"
      type="text"
      placeholder="Название"
    />
    <my-input
      v-model="team.title"
      type="text"
      placeholder="Описание"
    />
    <my-button
      class="btn"
      style="align-self: flex-end; margin-top: 15px"
      @click="createTeam"
    >
      Создать
    </my-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      team: {
        id: '',
        title: ''
      }
    }
  },
  methods: {
    createTeam() {
      this.team.id = Date.now()
      this.$emit('create', this.team)
      this.team = {
        id: '',
        title: ''
      }
    }
  }
}
</script>

<style>
form {
  margin: 15px;
  display: flex;
  flex-direction: column;
}
</style>