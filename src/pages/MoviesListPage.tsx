import {Genres, Movies, MoviesPagination} from "../components";

const MoviesListPage = () => {
    return (
        <div>
            <Genres/>
            <Movies/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesListPage};