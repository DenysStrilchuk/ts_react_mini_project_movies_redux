import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../../interfaces";
import css from './Movie.module.css';

interface IProps extends PropsWithChildren {
    movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    return (
        <div className={css.Movie}>
            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Movie};