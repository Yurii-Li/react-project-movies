import { NavLink } from "react-router-dom";

import { Genres } from "../Genres/Genres";
import { Search } from "../Search/Search";
import { UserInfo } from "../UserInfo/UserInfo";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.navbar}>
                <NavLink to={"home"}>Home</NavLink>
                <NavLink to={"movies"}>Movies</NavLink>
                <Genres />
            </div>

            <div className={css.search}>
                <Search />
            </div>

            <div className={css.themeSwitcher}>
                <ThemeSwitcher />
            </div>

            <div className={css.userInfo}>
                <UserInfo />
            </div>
        </div>
    );
};

export { Header };
