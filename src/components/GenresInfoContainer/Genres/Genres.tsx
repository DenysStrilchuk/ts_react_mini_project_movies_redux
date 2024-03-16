import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresAction} from "../../../store";
import {Genre} from "../Genre";
import css from './Genres.module.css';
import {IGenre} from "../../../interfaces";

const Genres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresAction.getAll())
    }, [dispatch]);

    const handleGenreClick = (genre: IGenre) => {
    };

    return (
        <div className={css.Genres}>
            {genres.map(genre => <Genre key={genre.id} genre={genre} onGenreClick={handleGenreClick}/>)}
        </div>
    );
};

export {Genres};