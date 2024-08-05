<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6">Change Password</h2>
      <form @submit.prevent="changePassword">
        <div class="mb-4">
          <label for="currentPassword" class="block text-gray-700"
            >Current Password</label
          >
          <input
            type="password"
            id="currentPassword"
            v-model="current_password"
            class="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div class="mb-4">
          <label for="newPassword" class="block text-gray-700"
            >New Password</label
          >
          <input
            type="password"
            id="newPassword"
            v-model="new_password"
            class="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block text-gray-700"
            >Confirm New Password</label
          >
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div class="mb-6">
          <button
            type="submit"
            class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Change Password
          </button>
        </div>
        <div class="mb-6">
          <button
            type="button"
            @click="cancel"
            class="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
        <div v-if="errorMessage" class="text-red-500 mb-4">
          {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="text-green-500 mb-4">
          {{ successMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import apiAuthen from "@/services/api";

export default {
  name: "ChangePassword",
  data() {
    return {
      current_password: "",
      new_password: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async changePassword() {
      if (this.new_password !== this.confirmPassword) {
        this.errorMessage = "New passwords do not match.";
        return;
      }

      try {
        const response = await apiAuthen.postData("/changepassword", {
          current_password: this.current_password,
          new_password: this.new_password,
        });

        if (response.status === 200) {
          this.successMessage = "Password changed successfully.";
          this.errorMessage = "";
        }
      } catch (error) {
        this.errorMessage = "Failed to change password.";
        this.successMessage = "";
        console.error("Error changing password:", error);
      }
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
