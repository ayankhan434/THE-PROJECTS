
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// REGISTER
export async function register({ username, email, password }) {
  try {
    const response = await api.post("/api/auth/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.error(
      "Register error:",
      err.response?.data || err.message
    );

    throw err;
  }
}

// LOGIN
export async function login({ email, password }) {
  try {
    const response = await api.post("/api/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.error(
      "Login error:",
      err.response?.data || err.message
    );

    throw err;
  }
}

// LOGOUT
export async function logout() {
  try {
    const response = await api.get("/api/auth/logout");
    return response.data;
  } catch (err) {
    console.error(
      "Logout error:",
      err.response?.data || err.message
    );

    throw err;
  }
}

// GET CURRENT USER
export async function getMe() {
  try {
    const response = await api.get("/api/auth/get-me");
    return response.data;
  } catch (err) {
    console.error(
      "Get user error:",
      err.response?.data || err.message
    );

    throw err;
  }
}