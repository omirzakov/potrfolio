<template>
  <div id="app">
    <div class="main-wrapper">
      <Header />
      <MenuLinks />
    </div>

  </div>
</template>

<script>
  import Header from "./components/Header";
  import MenuLinks from "./components/MenuLinks";

export default {
  data() {
    return {
      click: 0,
    }
  },
  components: {
    Header,
    MenuLinks
  }
 }

</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: url("../../vue-my-portfolio/src/assets/main-background.png") no-repeat;
  z-index: 1;
  position: relative;
  min-height: 100vh;
}

  .main-wrapper {
    position: relative;
    min-height: 100vh;
    background-color: rgba(13, 10, 10, 0.8);
  }

</style>

