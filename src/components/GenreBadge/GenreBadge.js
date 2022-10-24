import css from "./GenreBadge.module.css";

const GenreBadge = ({ genresList }) => {
    return <div className={css.GenreBadge}>{genresList[0]}</div>;
};

export { GenreBadge };
