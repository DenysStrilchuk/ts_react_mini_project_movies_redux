import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {searchActions} from "../../../store";
import {Movie} from "../../MoviesListConttainer";
import css from './SearchMovies.module.css';

const SearchMovies = () => {
    const {movies} = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(searchActions.getAll(''))
    }, [dispatch]);



    return (
        <div className={css.Movies_list}>
                {movies && movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
        </div>
    );
};

export {SearchMovies};