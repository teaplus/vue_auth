<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-1">
      <main class="flex-1 p-5 bg-gray-100">
        <h1 v-if="data">Welcome {{ data.username }}</h1>
        <div v-if="data" class="mt-4">
          <p><strong>Address:</strong> {{ data.address }}</p>
          <p><strong>Phone Number:</strong> {{ data.phoneNumber }}</p>
          <p><strong>Email:</strong> {{ data.email }}</p>
        </div>
        <div v-else>
          <p>Loading user data...</p>
        </div>
      </main>
      <aside class="w-1/4 bg-gray-200 p-5">
        <h3 class="text-lg font-semibold mb-2">Menu</h3>
        <ul class="space-y-2">
          <li>
            <router-link
              to="/"
              class="block text-gray-700 hover:bg-gray-300 p-2 rounded"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/change-pass"
              class="block text-gray-700 hover:bg-gray-300 p-2 rounded"
              >Change Password</router-link
            >
          </li>

          <li>
            <button
              @click="logout"
              class="block w-full text-gray-700 hover:bg-gray-300 p-2 rounded"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
import apiAuthen, { apiData, clearCookieAuth } from "@/services/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      data: null,
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiData.getData("/user");
        this.data = response.data;
        console.log("Response:", this.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        this.error = "Error fetching data: " + error.message;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      await apiAuthen.postData("/logout").then((response) => {
        console.log("logout", response.data);
        clearCookieAuth();

        this.$router.push("/Login");
      });
      console.log("User logged out");
    },
  },
};
</script>

<style></style>
