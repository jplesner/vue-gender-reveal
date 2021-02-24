<template>
<div class="row justify-content-center">
  <div class="col-md-10">
    <img class="mb-8" src="../assets/photo1.jpg">
    <p>
      Friends &amp; Family we are delighted to share the beautiful blessing of our new arrival with you all. 
      With times being so different, we thought this would be a good way to share the joy and experience.
    </p>
    <p> 
      So play along, have a guess, and await the reveal!
    </p>
    <p>
      Love {{this.$parentName1}} &amp; {{this.$parentName2}} x
    </p>
</div>
</div>
</template>

<script>
export default {
  name: 'WelcomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: left;
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
