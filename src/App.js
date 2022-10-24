import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts";
import { MovieInfo } from "./components";
import { GenrePage, HomePage, MoviesPage, SearchPage } from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<MainLayout />}>
                    <Route index element={<Navigate to={"/home"} />} />
                    <Route path={"home"} element={<HomePage />} />
                    <Route path={"movies"} element={<MoviesPage />} />
                    <Route path={"movies/:id"} element={<MovieInfo />} />
                    <Route path={"movies/:genre/:id"} element={<GenrePage />} />
                    <Route path={"search"} element={<SearchPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
