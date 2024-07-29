<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="user.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="user.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import apiAuthen from "@/services/api";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      // Handle login logic here
      console.log("Login:", this.email, this.password);
      await apiAuthen
        .postData("/login", this.user)
        .then((response) => {
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
