import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../store";
import {MovieCard} from "../MovieCard";
import css from './MoviesCard.module.css';

const MoviesCard = () => {
    const {movieCard} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id} = useParams<{ id?: string }>();

    useEffect(() => {
        dispatch(moviesActions.getByMovieId(parseInt(id)))
    }, [dispatch, id]);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className={css.backBtn}>
                <button onClick={goBack}>Back</button>
            </div>
            {movieCard && <MovieCard movieCard={movieCard}/>}
        </div>
    );
};

export {MoviesCard};