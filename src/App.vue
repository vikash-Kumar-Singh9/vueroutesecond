<template>
  <div>
    <Navbar />
    <div id="app">
      <div class="section">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
 

<script>
import "bulma/css/bulma.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  background-color: #e8e8e8;
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
