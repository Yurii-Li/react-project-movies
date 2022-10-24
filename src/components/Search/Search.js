import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { moviesActions } from "../../redux/slices";

import css from "./Search.module.css";

const Search = () => {
    const dispatch = useDispatch();

    const { searchMovieValue } = useSelector((state) => state.moviesReducer);

    const navigate = useNavigate();

    const onChange = (e) => {
        dispatch(moviesActions.setSearchMovieValue(e.target.value));
        if (e.target.value === "") {
            navigate("/movies");
        } else {
            navigate("/search");
        }
    };

    return (
        <div>
            <input className={css.input} type="text" value={searchMovieValue} onChange={onChange} placeholder="Search..." />
        </div>
    );
};

export { Search };
