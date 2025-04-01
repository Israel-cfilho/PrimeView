import axios from "axios";

//https://api.themoviedb.org/3/movie/now_playing?api_key=b21e09efe9e5c65e3e3da7708cab3ba3&language=pt-BR

// base da URL: https://api.themoviedb.org/3/


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;