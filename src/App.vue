<template>
  <div id="app">
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
console.log("heheh", process.env.Base_URL);
</script>

<style>
/* Add your styles here */
</style>
