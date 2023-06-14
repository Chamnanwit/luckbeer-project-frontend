import axios from "../configs/axios";

// const todoApi = axios.create({
//     baseURL : 'http://localhost:8989'
// })

// const addToken = (token) => ({
//     headers : {
//         Authorization: `Bearer ${token}`
//     }
// })

export const register = (input) => {
  return axios.post("/auth/register", input);
};

export const login = (input) => {
  return axios.post("/auth/login", input);
};

export const getMe = () => {
  return axios.get("/auth/me");
};
