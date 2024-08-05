<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="Register p-6 max-w-lg bg-white rounded-xl shadow-md space-y-6">
      <h2 class="text-2xl font-bold text-center">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email:</label
            >
            <input
              type="email"
              v-model="user.email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
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
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div>
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700"
              >Confirm Password:</label
            >
            <input
              type="password"
              v-model="user.confirmPassword"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="address" class="block text-sm font-medium text-gray-700"
              >Address:</label
            >
            <input
              type="text"
              v-model="user.address"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              for="phoneNumber"
              class="block text-sm font-medium text-gray-700"
              >Phone Number:</label
            >
            <input
              type="text"
              v-model="user.phoneNumber"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
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
        userName: "",
        password: "",
        confirmPassword: "",
        address: "",
        phoneNumber: "",
      },
    };
  },
  created() {
    console.log("eee", process.env);
  },
  methods: {
    async handleRegister() {
      // Handle registration logic here
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      await apiAuthen
        .postData("/register", this.user)
        .then((response) => {
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("Register:", this.user);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
