<template>
  <div id="app">
    <header
      class="bg-green-500 text-white p-5 text-center flex justify-between items-center min-h-16"
    >
      <nav v-if="!isLogin">
        <router-link
          to="/login"
          class="mx-2 text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded"
          >Login</router-link
        >
        <router-link
          to="/register"
          class="mx-2 text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded"
          >Register</router-link
        >
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "App",
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const cookie = Cookies.get("accessToken");
      if (cookie) {
        this.isLogin = true;
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
