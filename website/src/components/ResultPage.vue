<template>
  <div class="container">
    <h1>Baby {{this.$isBoy ? 'Boy' : 'Girl'}}</h1>
    <h2>{{this.$familyName}}</h2>
    <h2>{{this.$dueDate}}</h2>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :href="item"
        target="_blank"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      <img :src="item">
      </v-carousel-item>
    </v-carousel>
    </div>
</template>
<script>
export default {
  name: 'ResultPage',
  data() {
    return {
      items: [
      require('../assets/photo2.jpg'),
      require('../assets/photo3.jpg'),
      require('../assets/photo4.jpg'),
      require('../assets/photo5.jpg'),
    ]}
  },
}
</script>
<style scoped>
  .container{
    background-color: white;
  }
  .v-carousel{
    margin-bottom: 16px;
    margin-top: 16px;
  }
  img {
    max-height: 500px;
    max-width: 320px;
  }
  @media (min-width: 576px){ 
    img {
      max-width: 500px;
    }
  }
  @media (min-width: 767.98px){ 
    img {
      max-width: unset;
    }
  }
</style>
<style>
  .v-carousel .v-carousel__controls {
    display: none;
  }
</style>