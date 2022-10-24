import { useDispatch } from "react-redux";

import { moviesActions } from "../../redux/slices";

import css from "./NavPagesGenre.module.css";

const NavPagesGenre = ({ searchMoviesByGenrePage, searchMoviesByGenreTotalPages, id }) => {
    const dispatch = useDispatch();

    const pages = [];

    if (searchMoviesByGenreTotalPages <= 10) {
        for (let i = 1; i <= searchMoviesByGenreTotalPages; i++) {
            pages.push(i);
        }
    } else if (searchMoviesByGenrePage % 10 === 0) {
        for (let i = searchMoviesByGenrePage + 1; i <= searchMoviesByGenrePage + 10; i++) {
            pages.push(i);
        }
    } else if (searchMoviesByGenrePage % 10 !== 0) {
        for (
            let i = searchMoviesByGenrePage + 1 - (searchMoviesByGenrePage % 10);
            i <= searchMoviesByGenrePage - (searchMoviesByGenrePage % 10) + 10;
            i++
        ) {
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
                <button
                    disabled={searchMoviesByGenrePage === 1}
                    onClick={() =>
                        dispatch(
                            moviesActions.searchMoviesByGenre({
                                genreId: id,
                                page: searchMoviesByGenrePage - 1,
                            })
                        )
                    }
                >
                    <img
                        className={css.arrowImg}
                        src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-1/24/arrow-circle-left-512.png"
                        alt=""
                    />
                </button>

                <div className={css.numbers}>
                    {pages.map((page) => (
                        <button
                            className={css.numPage}
                            key={page}
                            onClick={() =>
                                dispatch(
                                    moviesActions.searchMoviesByGenre({
                                        genreId: id,
                                        page: page,
                                    })
                                )
                            }
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    disabled={searchMoviesByGenrePage === searchMoviesByGenreTotalPages}
                    onClick={() =>
                        dispatch(
                            moviesActions.searchMoviesByGenre({
                                genreId: id,
                                page: searchMoviesByGenrePage + 1,
                            })
                        )
                    }
                >
                    <img
                        className={css.arrowImg}
                        src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-1/24/arrow-circle-right-512.png"
                        alt="Right Arrow"
                    />
                </button>
            </div>
            <div className={css.currentPage}>{searchMoviesByGenrePage}</div>
        </div>
    );
};

export {NavPagesGenre};