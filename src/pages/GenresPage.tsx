import {Genres, MoviesByGenresPagination} from "../components";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
            <Outlet/>
            <MoviesByGenresPagination/>
        </div>
    );
};

export {GenresPage};