import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { genresActions } from "../../redux/slices";

import css from "./Genres.module.css";

const Genres = () => {
    const dispatch = useDispatch();

    const { genres } = useSelector((state) => state.genresReducer);

    useEffect(() => {
        dispatch(genresActions.getGenres());
    }, [dispatch]);

    return (
        <div className={css.dropdown}>
            <button className={css.dropbtn}>Genres</button>

            <div className={css.dropdownContent}>
                {genres.map((genre) => (
                    <Link to={`movies/${genre.name}/${genre.id}`} key={genre.id}>
                        {genre.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export { Genres };
