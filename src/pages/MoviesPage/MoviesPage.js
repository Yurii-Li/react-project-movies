import { MoviesList } from "../../components";

import css from "./MoviesPage.module.css";

const MoviesPage = () => {
    return <div className={css.MoviesPage}>{<MoviesList />}</div>;
};

export { MoviesPage };
