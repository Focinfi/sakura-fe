<template>
  <div class="tips">
    <p>
      {{ mainTip }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'tips',
  props: ['mainTip'],

  beforeMount() {
    this.refreshMainTip()
  },

  methods: {
    refreshMainTip() {
      this.$store.dispatch('FETCH_MAIN_TIP', {userID: '123'})
    }
  }
}
</script>

<style>
.tips {
  height: 800px;
  padding: 50px;
  margin-bottom: 10px;
  background-color: green;

  p {
    color: white;
    font-size: 50px;
    text-align: center;
  }
}
</style>
