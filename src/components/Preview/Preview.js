import { Link } from "react-router-dom";

import { StarsRating } from "../StarsRating/StarsRating";

import css from "./Preview.module.css";

const Preview = ({ movie }) => {
    const { backdrop_path, title, overview, vote_average, release_date, id } = movie;

    return (
        <div>
            <div className={css.wrapper}>
                <Link to={`/movies/${id}`}>
                    <div className={css.wrapperImg}>
                        {backdrop_path && (
                            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
                        )}

                        <div className={css.content}>
                            <h2>{title}</h2>
                            {vote_average && <StarsRating vote_average={vote_average} />}
                            <div>Release Date: {release_date}</div>
                            <p className={css.overview}>{overview}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export { Preview };
