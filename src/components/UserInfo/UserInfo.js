import css from "./UserInfo.module.css";

const UserInfo = () => {
    return (
        <div className={css.UserInfo}>
            <img className={css.myPhoto} src={'https://www.themoviedb.org/t/p/w150_and_h150_face/17Ww4IzLBXhLEqBjxCHz6wjJK4G.png'} alt="I" />
            <div className={css.name}>Yuriy Lyubuskyi</div>
        </div>
    );
};

export { UserInfo };
