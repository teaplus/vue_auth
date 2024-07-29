import axios from "axios";

// Tạo một instance của Axios với cấu hình cơ bản
const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Định nghĩa các hàm API
const apiAuthen = {
  // Hàm lấy hồ sơ giao dịch của ví
  postData(endpoint, data) {
    return apiClient.post(endpoint, data);
  },
};

export default apiAuthen;
