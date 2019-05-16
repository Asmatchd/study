import axios from "axios";

export const baseUrl = "https://randomuser.me/api?results=50";
// export const baseUrl = "localhost:4000/api/ninjas";

export const axiosInstance = axios.create({});