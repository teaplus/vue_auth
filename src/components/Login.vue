<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Handle login logic here
      console.log("Login:", this.email, this.password);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
