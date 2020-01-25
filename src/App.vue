<template>
  <div id="app">
    <p> {{ message }} </p>
    <button @click="reverseMessage"> Кликни братан!</button>


    <input type="text" v-model="message">
  </div>
</template>

<script>

export default {
  el: '#app',
  data() {
    return {
      message: 'Привет , Vue JS'
    }
  },
  methods: {
    reverseMessage: function () {
      setInterval(() => {
        this.message = this.message.split('').reverse().join('');
      }, 300)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
