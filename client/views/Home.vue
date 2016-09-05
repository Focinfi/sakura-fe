<template>
  <div id="home">
    <tips></tips>
    <activity-records></activity-records>
    <new-activity></new-activity>
    <new-button></new-button>
  </div>
</template>

<script>
import Tips from '../components/Tips.vue'
import ActivityRecords from '../components/ActivityRecords.vue'
import NewActivity from '../components/NewActivity.vue'
import NewButton from '../components/NewButton.vue'

export default {
  components: {
      Tips, ActivityRecords, NewActivity, NewButton
  }
}
</script>
