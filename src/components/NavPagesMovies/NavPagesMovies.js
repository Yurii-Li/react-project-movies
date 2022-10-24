import { useDispatch } from "react-redux";

import { moviesActions } from "../../redux/slices";

import css from "./NavPagesMovies.module.css";

const NavPagesMovies = ({ page, totalPages }) => {
    const dispatch = useDispatch();

    const pages = [];

    if (totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else if (page % 10 === 0) {
        for (let i = page + 1; i <= page + 10; i++) {
            pages.push(i);
        }
    } else if (page % 10 !== 0) {
        for (let i = page + 1 - (page % 10); i <= page - (page % 10) + 10; i++) {
            pages.push(i);
        }
    } else {
        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }
    }

    return (
        <div className={css.NavPages}>
            <div className={css.nav}>
                <button disabled={page === 1} onClick={() => dispatch(moviesActions.getMovies(page - 1))}>
                    <img
                        className={css.arrowImg}
                        src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-1/24/arrow-circle-left-512.png"
                        alt=""
                    />
                </button>

                <div className={css.numbers}>
                    {pages.map((page) => (
                        <button className={css.numPage} key={page} onClick={() => dispatch(moviesActions.getMovies(page))}>
                            {page}
                        </button>
                    ))}
                </div>

                <button disabled={page === totalPages} onClick={() => dispatch(moviesActions.getMovies(page + 1))}>
                    <img
                        className={css.arrowImg}
                        src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-1/24/arrow-circle-right-512.png"
                        alt="Right Arrow"
                    />
                </button>
            </div>
            <div className={css.currentPage}>{page}</div>
        </div>
    );
};

export { NavPagesMovies };
