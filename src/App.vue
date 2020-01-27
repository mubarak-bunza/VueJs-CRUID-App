<template>
  <div id="app" class="container my-4 bg-color">
    <app-navbar />
    <app-content />
    <app-footer />
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Contents from './components/Contents.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      'app-navbar': NavBar,
      'app-content': Contents,
      'app-footer': Footer
    }
  }
</script>

<style lang="scss">
  .bg-color {
    background-color: snow;
  }
</style>
