<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="logo">Discovery</RouterLink>
      <RouterLink to="/">Home </RouterLink>
      <section class="drop-down-menu">
        <span>Account</span>
        <div class="drop-down-content">
          <RouterLink to="/signup">Sign Up</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </section>
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


  .drop-down-content {
    display: none;
  }


  .drop-down-menu:hover .drop-down-content {
    display: block;
    position: fixed;
    display: flex;
    min-width: 100px;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    background-color: #e0e0e0;
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
