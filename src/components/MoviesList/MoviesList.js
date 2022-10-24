import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { moviesActions } from "../../redux/slices";
import { MovieCard } from "../MovieCard/MovieCard";
import { Loader } from "../Loader/Loader";
import { NavPagesMovies } from "../NavPagesMovies/NavPagesMovies";

import css from "./MoviesList.module.css";

const MoviesList = () => {
    const dispatch = useDispatch();

    const { movies, page, totalPages, loading } = useSelector((state) => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getMovies(page));
    }, [dispatch, page]);

    return loading ? (
        <Loader />
    ) : (
        <div>
            <div className={css.wrapperCards}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <NavPagesMovies page={page} totalPages={totalPages} />
        </div>
    );
};

export {MoviesList};
