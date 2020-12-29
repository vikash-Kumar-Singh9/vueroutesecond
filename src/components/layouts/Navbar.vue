<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <!-- <a class="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a> -->
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/contact" class="navbar-item">Contact Us</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <button @click="goToDashboard" class="button is-primary">
              <strong>Dashboard</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goToDashboard() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>



