<template>
  <div id="home">
    <tips :mainTip="mainTip"></tips>
    <activity-records></activity-records>
    <new-activity :isShow="isShowNewActivity"></new-activity>
    <new-button></new-button>
  </div>
</template>

<script>
import Tips from '../components/Tips.vue'
import ActivityRecords from '../components/ActivityRecords.vue'
import NewActivity from '../components/NewActivity.vue'
import NewButton from '../components/NewButton.vue'

export default {
  computed: {
    mainTip() {
      return this.$store.state.mainTip
    },
    isShowNewActivity() {
      return this.$store.state.showNewActivity
    }
  },
  components: {
    Tips, ActivityRecords, NewActivity, NewButton
  }
}
</script>
