import { Link } from "react-router-dom";

import css from "./CarouselItem.module.css";

const CarouselItem = ({ movie }) => {
    const { backdrop_path, title, id } = movie;
    return (
        <div className={css.CarouselItem}>
            <Link to={`/movies/${id}`}>
                <div className={css.card}>
                    <img className={css.backdrop} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
                    <div className={css.title}>{title}</div>
                </div>
            </Link>
        </div>
    );
};

export { CarouselItem };
