<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Welcome!
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Make your choice!
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Reveal
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items color="grey">
      <v-stepper-content step="1">
        <v-card class="mb-12" color="lighten-1">
          <welcome-page/>
        </v-card>

        <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="lighten-1">
          <guess-page @genderSelected="gender => selectedGender = gender"/>
        </v-card>

        <v-btn :disabled="!selectedGender" color="primary" @click="e1 = 3; addGuess()">Continue</v-btn>
        <v-btn text @click="e1 = 1">Back</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
      <v-card class="mb-12" color="lighten-1">
       <reveal-page v-if="readyToReveal"/>
      </v-card>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import WelcomePage from './WelcomePage'
import GuessPage from './GuessPage'
import RevealPage from './RevealPage.vue'
export default {
  name: 'FormStepper',
  components: {
    WelcomePage,
    GuessPage,
    RevealPage
  },
  computed: {
    readyToReveal(){
      return this.guessSubmitted;
    }
  },
  methods: {
    addGuess() {
      this.$store.dispatch('addGuess', this.selectedGender);
      this.guessSubmitted = true;
    }
  },
  data () {
    return {
      e1: 1,
      selectedGender: null,
      guessSubmitted: false,
    }
  },
}
</script>
<style scoped>
  .v-sheet.v-card {
    box-shadow: unset !important;
  }
</style>