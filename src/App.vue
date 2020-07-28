<template>
  <div id="app">
<!--    <hamburger-component/>-->
    <header-component/>
    <main-title-component/>
    <star-wars-list-component/>
    <communicate-component/>
    <footer-component/>


  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import MainTitleComponent from "./components/MainTitleComponent";
import FooterComponent from "./components/FooterComponent";
import StarWarsListComponent from "./components/StarWarsListComponent";
import CommunicateComponent from "./components/CommunicateComponent";
// import HamburgerComponent from "./components/HamburgerComponent";


export default {
  name: 'App',
  components: {
    // HamburgerComponent,
    StarWarsListComponent,
    FooterComponent,
    CommunicateComponent,
    MainTitleComponent,
    HeaderComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, Courier, Archivo Black, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
max-width: 1300px;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}


</style>
