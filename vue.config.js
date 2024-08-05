const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: false, // Bật HTTPS
    client: {
      webSocketURL: "wss://45d4-27-69-217-82.ngrok-free.app/ws", // Thay thế tên miền ngrok của bạn ở đây
    },
  },
});
