import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { moviesActions } from "../../redux/slices";
import { Loader } from "../Loader/Loader";

import css from "./MovieInfo.module.css";

const MovieInfo = () => {
    const { id } = useParams();

    const { movie, loading } = useSelector((state) => state.moviesReducer);

    const dispatch = useDispatch();

    const { adult, genres, title, vote_average, status, overview, poster_path, release_date, original_language } = movie;

    useEffect(() => {
        dispatch(moviesActions.getMovie(id));
    }, [dispatch, id]);

    return loading ? (
        <Loader />
    ) : (
        <div className={css.MovieInfo}>
            <h2 className={css.title}>{title}</h2>

            <div className={css.info}>
                <div>
                    <img className={css.poster} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                </div>
                <div className={css.description}>
                    <div>Rating: {(vote_average / 2).toFixed(1)}</div>
                    <div>Release date: {release_date}</div>
                    <div>Original language: {original_language}</div>
                    <div>Adult: {adult ? "Yes" : "No"}</div>
                    <div>Genres: {genres?.map((genre) => genre.name).join(", ")}</div>
                    <div>Status: {status}</div>
                    <div>Overview: {overview}</div>
                </div>
            </div>
        </div>
    );
};

export { MovieInfo };
