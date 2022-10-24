import { useTheme } from "../../hooks";

import css from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className={css.ThemeSwitcher}>
            <button className={css.dark} onClick={() => setTheme("dark")}>
                <img src="https://i.ibb.co/FxzBYR9/night.png" alt="Dark theme" />
            </button>

            <button
                className={css.light}
                onClick={() => {
                    setTheme("light");
                }}
            >
                <img src="https://i.ibb.co/7JfqXxB/sunny.png" alt="Light theme" />
            </button>
        </div>
    );
};

export { ThemeSwitcher };
