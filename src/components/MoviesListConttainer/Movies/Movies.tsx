import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";

import {moviesActions} from "../../../store";
import {Movie} from "../Movie";
import css from './Movies.module.css';

const Movies = () => {
    const {movies,page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll(page))
    }, [dispatch, page]);


    return (
        <div  className={css.MoviesModule}>
            <div className={css.movies_list}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Movies};