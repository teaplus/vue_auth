<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Login">
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        class="Register p-6 max-w-lg bg-white rounded-xl shadow-md space-y-6"
      >
        <h2 class="text-2xl font-bold text-center">Login</h2>
        <form @submit.prevent="handleLogin" class="space-y-3">
          <div>
            <label
              for="userName"
              class="block text-sm font-medium text-gray-700"
              >Username:</label
            >
            <input
              type="text"
              v-model="user.userName"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password:</label
            >
            <input
              type="password"
              v-model="user.password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
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
