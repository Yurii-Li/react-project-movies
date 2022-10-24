import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";

import {moviesActions} from "../../redux/slices";
import {Carousel, Loader, Preview} from "../../components";

import css from "./HomePage.module.css";

const HomePage = () => {
    const {movies, movie, loading} = useSelector((state) => state.moviesReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(moviesActions.getMovies(1));
    }, [dispatch]);

    useEffect(() => {
        dispatch(moviesActions.getMovie(movies[0]?.id));
    }, [dispatch, movies]);


    return (
        loading ? <Loader/> : <div className={css.HomePage}>
            <Preview movie={movie}/>

            <div>
                <Link className={css.titleCarousel} to={"/movies"}>New Movies</Link>
                <Carousel movies={movies}/>
            </div>
        </div>
    );
};

export {HomePage};