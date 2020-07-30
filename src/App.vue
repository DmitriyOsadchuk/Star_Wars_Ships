<template>
  <div id="app">
    <header-component/>
    <router-view/>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from "./components/FooterComponent";



export default {
  name: 'App',
  components: {
      FooterComponent,
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
