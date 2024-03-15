import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";
import {moviesActions} from "../../../store";
import {MovieCard} from "../MovieCard";

const MoviesCard = () => {
    const {movieCard, movieId} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getByMovieId(movieId))
    }, [dispatch, movieId]);

    return (
        <div>
            {movieCard && <MovieCard movieCard={movieCard}/>}
        </div>
    );
};

export {MoviesCard};