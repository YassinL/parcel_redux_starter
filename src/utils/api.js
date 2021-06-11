import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000/api/v1/",
});

// export const addAuth = token => {
//     // instance.defaults.headers.common["Authorization"] = "Bearer " + token;
//     instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

export default api;
