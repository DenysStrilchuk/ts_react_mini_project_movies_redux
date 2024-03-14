import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";
import {moviesActions} from "../../../store";
import {Movie} from "../Movie";

const Movies = () => {
    const {movies,page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll(page))
    }, [dispatch, page]);


    return (
        <div>
            {movies.length > 0 && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};