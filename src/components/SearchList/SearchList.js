import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { moviesActions } from "../../redux/slices";
import { MovieCard } from "../MovieCard/MovieCard";

import css from "./SearchList.module.css";

const SearchList = () => {
    const { searchMovies, searchMovieValue } = useSelector((state) => state.moviesReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.searchMovies(searchMovieValue));
    }, [dispatch, searchMovieValue]);

    return (
        <div className={css.wrapperCards}>
            {searchMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export {SearchList};
