import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { StarsRating } from "../StarsRating/StarsRating";
import { GenreBadge } from "../GenreBadge/GenreBadge";

import css from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
    const { title, poster_path, genre_ids, overview, vote_average, id } = movie;

    const { genres } = useSelector((state) => state.genresReducer);

    const genresList = genres.filter((genre) => genre_ids.includes(genre.id)).map((genre) => genre.name);

    return (
        <div className={css.MoviesListCard}>
            <Link to={`/movies/${id}`}>
                <div className={css.wrapperImg}>
                    <GenreBadge genresList={genresList} />
                    {poster_path && (
                        <img className={css.poster} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                    )}
                    <div className={css.title}>{title}</div>
                </div>
            </Link>

            <div className={css.wrapperInfo}>
                <div>{genresList.join(", ")}</div>
                <div className={css.overview}>{overview}</div>
                <div className={css.stars}>
                    <StarsRating vote_average={vote_average} />
                </div>
            </div>
        </div>
    );
};

export { MovieCard };
