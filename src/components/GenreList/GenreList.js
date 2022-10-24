import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { moviesActions } from "../../redux/slices";
import { MovieCard } from "../MovieCard/MovieCard";
import { Loader } from "../Loader/Loader";
import { NavPagesGenre } from "../NavPagesGenre/NavPagesGenre";

import css from "./GenreList.module.css";

const GenreList = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { searchMoviesByGenre, searchMoviesByGenreTotalPages, searchMoviesByGenrePage, loading } = useSelector(
        (state) => state.moviesReducer
    );

    useEffect(() => {
        dispatch(moviesActions.searchMoviesByGenre({ genreId: id, page: 1 }));
    }, [dispatch, id]);

    return loading ? (
        <Loader />
    ) : (
        <div>
            <div className={css.wrapperCards}>
                {searchMoviesByGenre.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <div>
                <NavPagesGenre
                    id={id}
                    searchMoviesByGenrePage={searchMoviesByGenrePage}
                    searchMoviesByGenreTotalPages={searchMoviesByGenreTotalPages}
                />
            </div>
        </div>
    );
};

export { GenreList };
