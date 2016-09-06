<template>
  <div v-on:click="toggleShowNewActivity" class="new-button">
  </div>
</template>

<script>
export default {
  name: 'new-button',
  methods: {
    toggleShowNewActivity() {
      this.$store.dispatch('TOGGLE_SHOW_NEW_ACTIVITY')
    }
  }
}
</script>

<style>
.new-button {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding: 10px;
  background-color: green;
  position: relative;
}
</style>
