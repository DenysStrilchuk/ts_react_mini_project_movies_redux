import {useAppSelector} from "../../../hooks";
import {Movie} from "../../MoviesListConttainer";
import css from './SearchMovies.module.css';



const SearchMovies = () => {
    const { movies } = useAppSelector(state => state.search);


    return (
        <div className={css.Movies_list}>
                {movies && movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
        </div>
    );
};

export {SearchMovies};