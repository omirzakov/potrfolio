<template>
  <div id="app">
    <div class="main-wrapper">
      <Header />
      <div class="main-body">
      <div class="menu-links">
        <div class="nav">
        <nav>
          <ul>
            <li><router-link to="/about">Обо мне</router-link></li>
            <li><router-link to="/contact">Контакты</router-link></li>
            <li><router-link to="/skills">Навыки</router-link></li>
            <li><router-link to="/jobs">Мои работы</router-link></li>
          </ul>
        </nav>
        </div>
      </div>
        <transition name="router-anim" >
          <router-view />
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from "./components/Header";

export default {
  data() {
    return {
    }
  },
  components: {
    Header,
  }
 }

</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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

  .main-body {
    display: flex;
  }





  /*   Ссылки    */



  li {
    list-style: none;
    margin-top: 100px;
  }

  a {
    color: white;
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
    font-size: 15px;
    transition: 0.3s ease-out;
  }

  a:hover {
    color: #0995B6;
    opacity: 0.9;
  }


  nav {
    margin-left: 40px;
  }


  nav::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 19px;
    transform: translateY(-50%);
    width: 3px;
    height: 70%;
    max-height: 750px;
    background-color: white;
    opacity: .35;
    z-index: 10;
  }

  li::before {
    content: '';
    position: relative;
    z-index: 11;
    cursor: pointer;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.1);
    background: #0995B6;
    display: inline-block;
    top: 0;
    right: 23px;
    transition: 0.3s;
  }

  li::before:hover {
    background: #0995B6;
    opacity: 0.9;
    -webkit-box-shadow: 10px 10px 5px -2px rgba(204,204,204,1);
    -moz-box-shadow: 10px 10px 5px -2px rgba(204,204,204,1);
    box-shadow: 10px 10px 5px -2px rgba(204,204,204,1);
  }


</style>

