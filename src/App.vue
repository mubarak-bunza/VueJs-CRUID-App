<template>
  <div id="app" class="container my-4 bg-color">
    <app-navbar />
    <app-content />
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Contents from './components/Contents.vue'

  export default {
    name: 'app',
    components: {
      'app-navbar': NavBar,
      'app-content': Contents
    }
  }
</script>

<style lang="scss">
  .bg-color {
    background-color: snow;
  }
</style>
