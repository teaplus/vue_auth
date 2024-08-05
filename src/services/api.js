import axios from "axios";
import Cookies from "js-cookie";
let urlApi = process.env.VUE_APP_API_URL || "http://localhost:8081/v1/api/";

// Tạo một instance của Axios với cấu hình cơ bản
export const callAPIWithToken = axios.create({
  baseURL: urlApi,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiAuthen = {
  postData(endpoint, data) {
    return callAPIWithToken.post(endpoint, data);
  },
};

export const apiData = {
  getData(endpoint) {
    return callAPIWithToken.get(endpoint);
  },
};

callAPIWithToken.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    const clientId = Cookies.get("client-Id");
    const user = Cookies.get("user");
    console.log("tokennn", token, clientId, user);
    if (token) {
      config.headers["Authorization"] = token;
      config.headers["X-Client-ID"] = clientId;
      config.headers["user"] = user;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// refresh Token when token exprired

callAPIWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const errorConfig = error.config;
    console.log(errorConfig);
  }
);

export const setCookieAuth = (CookieAuth, user, clientId) => {
  console.log("authtoken", CookieAuth.accessToken);
  if (CookieAuth.accessToken) {
    Cookies.set("accessToken", CookieAuth.accessToken);
    Cookies.set("user", user);
    Cookies.set("client-Id", clientId);
    Cookies.set("refreshToken", CookieAuth.refreshToken, {
      secure: true,
      sameSite: "Strict",
      expires: 7,
    });
  } else {
    Cookies.remove("accessToken");
  }
};

export const clearCookieAuth = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.remove("user");
  Cookies.remove("client-Id");
};

export const logout = () => {
  clearCookieAuth();
  window.location.href = "/login";
};

export default apiAuthen;
