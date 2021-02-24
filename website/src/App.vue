<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <h5 class="mx-auto">{{this.$parentName1}} &amp; {{this.$parentName2}}'s Gender Reveal</h5>
    </v-app-bar>

    <v-main class="container pa-5">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('getGuesses');
    document.title = `${this.$familyName} Gender Reveal`;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: linear-gradient(to bottom, #7897a5, #ECEFF1);
}
</style>