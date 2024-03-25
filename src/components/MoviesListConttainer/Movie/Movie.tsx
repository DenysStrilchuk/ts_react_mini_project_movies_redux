import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../../interfaces";
import css from './Movie.module.css';
import {useNavigate} from "react-router-dom";
import {MyCustomStarRating} from "../../StarRatingContainer";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/movie/${id}`)} className={css.Movie}>
            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <MyCustomStarRating rating={vote_average}/>
            <div>{title}</div>
        </div>
    );
};

export {Movie};


