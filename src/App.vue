<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="logo">Discovery</RouterLink>
      <RouterLink to="/signup">Sign Up</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {



  nav {
    display: flex;
    gap: 50px;
    padding: 50px 0px;
    justify-content: center;
  }

  nav .logo {
    flex: 1;
    color: #fd5b5b;
    font-size: 18px;
  }

  nav a {
    text-decoration: none;
    color: black;
  }
}
</style>
