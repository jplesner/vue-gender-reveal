<template>
<div>
  <h1>What's your guess?</h1>
  <div class="row justify-content-center guess-container">
    <div class="col-md-4">
      <v-btn v-bind:class="{active: selectedGender=='boy'}" @click="changeGender('boy')" color="blue" elevation="7" dark large block>
        <v-icon>mdi-gender-male</v-icon>Boy
      </v-btn>
    </div>
    <div class="col-md-4">
      <v-btn v-bind:class="{active: selectedGender=='girl'}" @click="changeGender('girl')" color="pink" elevation="7" dark large block>
        <v-icon>mdi-gender-female</v-icon>Girl
      </v-btn>
    </div>
  </div>
  <h2 v-if="selectedGender">Here's what other people have said so far</h2> 
  <div class="chart-container">    
    <bar-chart v-if="selectedGender" />
  </div>
</div>
</template>

<script>
import BarChart from './BarChart';
export default {
  name: 'GuessPage',
  components: { BarChart },
  data() {
    return {
      selectedGender: null,
      animate: false,
    };
  },
  methods: {
    changeGender(gender){
      this.animate = true;
      this.selectedGender = gender;
      this.$emit('genderSelected', gender);
    }
  }
}
</script>

<style scoped>
  button {
    margin-bottom: 10px;
    opacity: 0.5;
  }
  button i {
    margin-right: 5px;
  }
  button.active {
    opacity: 1;
  }
  .guess-container{
    margin-bottom: 32px;
  }
  .chart-container > div {
    max-width: 800px;
  }
</style>
