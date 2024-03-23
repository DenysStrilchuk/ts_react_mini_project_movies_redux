import {useAppSelector} from "../../../hooks";
import {Movie} from "../../MoviesListConttainer";
import css from './SearchMovies.module.css';
import {useNavigate} from "react-router-dom";



const SearchMovies = () => {
    const { movies } = useAppSelector(state => state.search);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/movies');
    };

    return (
        <div>
            <div className={css.backBtn}>
                <button onClick={goBack}>Back</button>
            </div>
            <div className={css.Movies_list}>
                {movies && movies.map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export {SearchMovies};