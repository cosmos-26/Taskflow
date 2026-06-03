import axios from "axios";

const api = axios.create({
  baseURL: "https://taskflow-ai2l.onrender.com/api/tasks",
});

export default api;