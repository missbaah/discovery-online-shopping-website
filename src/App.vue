<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/signup">Sign Up</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */


  nav {
    display: flex;
    gap: 50px;
    padding: 50px 0px;
    justify-content: center;
  }

  nav a {
    text-decoration: none;
    color: black;
  }
}
</style>
