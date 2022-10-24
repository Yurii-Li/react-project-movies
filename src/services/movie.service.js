import { axiosService } from "./axios.service";
import { urls } from "../configs";

const movieService = {
    getMovies: (page = 1) => axiosService.get(urls.movies, { params: { page } }),
    getMovie: (id) => axiosService.get(`${urls.movie}/${id}`),
    searchMovies: (query) => axiosService.get(urls.search, { params: { query } }),
    searchMoviesByGenre: (genreId, page = 1) => axiosService.get(urls.movies, { params: { with_genres: genreId, page } }),
};

export { movieService };
