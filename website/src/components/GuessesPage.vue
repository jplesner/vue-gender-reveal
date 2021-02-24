<template>
  <div class="container">
    <bar-chart v-if="dataLoaded" />
  </div>
</template>
<script>
import BarChart from './BarChart.vue'
export default {
  name: 'ResultPage',
  computed: {
    dataLoaded() {
      return !!this.$store.state.guesses;
    }
  },
  components: {
    BarChart
  },
}
</script>
<style scoped>
  .container{
    background-color: white;
  }
</style>