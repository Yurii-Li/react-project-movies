import css from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={css.preloader}>
            <div className={css.loader}></div>
        </div>
    );
};

export { Loader };