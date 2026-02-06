import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 60000,
});

export const askRAG = async (query, history) => {
  try {
    const payload = { query, history: history.slice(-5) };
    const res = await apiClient.post("/ask", payload);
    return res.data;
  } catch (err) {
    if (err.code === "ECONNABORTED") {
      return { answer: "Request timed out. Please try again." };
    }
    console.error("Backend error:", err);
    return { answer: "Backend not reachable. Try again later." };
  }
};