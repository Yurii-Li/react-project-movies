import axios from "axios";
import { baseURL } from "../configs";

let axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use((config) => {
    const access =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzdmNmIxYjMyZmUxMTFhYmNhYWY0Njg4MGI4YjhhNiIsInN1YiI6IjYzNGFkNDc4ODlmNzQ5MDA3ZDY5MTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OAGkCC2eoiDJY-eJQyZCJO5mFlZ1WTY8yTzCa4Hpkew";
    config.headers.Authorization = access;
    return config;
});

export { axiosService };
