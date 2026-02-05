import axios from "axios";

const apiClient = axios.create({
  //baseURL: "https://intragpt-rag-backend-h9b2e8csg9ajaygr.westeurope-01.azurewebsites.net",
  baseURL: "http://localhost:8000/",
  timeout: 60000, // 60 seconds
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