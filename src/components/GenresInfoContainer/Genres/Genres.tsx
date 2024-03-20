import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresAction} from "../../../store";
import {Genre} from "../Genre";
import css from './Genres.module.css';
import {IGenre} from "../../../interfaces";

const Genres = () => {
    const {genres, activeGenreId, genreMoviesCount} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresAction.getAll()).then(() => {
            dispatch(genresAction.getGenreMoviesCount());
        });
    }, [dispatch]);

    const handleGenreClick = (genre: IGenre) => {
        dispatch(genresAction.setActiveGenreId(genre.id));
    };

    return (
        <div className={css.Genres}>
            {genres.map(genre => <Genre key={genre.id}
                                        genre={genre}
                                        onGenreClick={handleGenreClick}
                                        isActive={genre.id === activeGenreId}
                                        count={genreMoviesCount[genre.id] || 0}
            />)}
        </div>
    );
};

export {Genres};