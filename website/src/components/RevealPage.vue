<template>
<v-carousel :continuous=false interval="3000" cycle height="600" hide-delimiter-background hide-delimeters show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%" >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            {{ slide }}
            <h1 v-show="i == slides.length -1" class="mt-5 pulsate">It&#39;s a {{gender}}!!</h1>
            <router-link v-show="i == slides.length -1" to="/result">
              <v-btn class="fade-in mt-5" color="primary">Continue</v-btn>
            </router-link>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'RevealPage',
  computed: {
    slides() {
      return [
          'You',
          'were',
          '...',
          (this.isGuessCorrect() ? 'Right!!' : 'Wrong!')
        ];
    },
  },
  methods: {
    isGuessCorrect(){
      const guessIsBoy = this.$store.state.userChoice == 'boy';
      return guessIsBoy == this.$isBoy;
    }
  },
  data () {
    return {
      colors: [
        'orange',
        'purple darken-2',
        'red lighten 3',
        this.$isBoy ? 'blue accent-4' : 'pink lighten 3',
      ],
      gender: this.$isBoy ? 'Boy' : 'Girl',
    }
  },
}
</script>

<style scoped>
.fill-height{
  height:100%;
}
img {
  max-height: 300px;
}
p {
  text-align: left;
}
.pulsate {
    -webkit-animation: pulsate 2s ease-out;
    -webkit-animation-iteration-count: infinite; 
    opacity: 0.9;
}
@-webkit-keyframes pulsate {
    0% { 
        opacity: 0.9;
    }
    50% { 
        opacity: 1.0;
    }
    100% { 
        opacity: 0.9;
    }
}
.fade-in {
  -webkit-animation: fade-in 2s ease;
}
@-webkit-keyframes fade-in {
    0% { 
        opacity: 0.0;
    }
    100% { 
        opacity: 1.0;
    }
}
</style>
