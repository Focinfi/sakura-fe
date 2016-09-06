<template>
  <div v-show="isShow" class="new-activity">
  </div>
</template>

<script>

export default {
  name: 'new-activity',
  props: ['isShow']
}

</script>

<style>
.new-activity {
  width: 100%;
  height: 800px;
  position: absolute;
  top: 43%;
  padding: 10px;
  background-color: blue;
}
</style>
