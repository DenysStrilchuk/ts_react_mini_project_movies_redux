import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../../interfaces";
import css from './Movie.module.css';
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/movie/${id}`)} className={css.Movie}>
            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div>{title}</div>
        </div>
    );
};

export {Movie};


