import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import css from "./MovieByGenre.module.css";
import {MyCustomStarRating} from "../../StarRatingContainer";

interface IProps extends PropsWithChildren {
    movieByGenre:IMovie
}

const MovieByGenre: FC<IProps> = ({movieByGenre}) => {
    const {title, poster_path, vote_average, id} = movieByGenre;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/movie/${id}`)} className={css.MovieByGenre}>
            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <MyCustomStarRating rating={vote_average}/>
            <div>{title}</div>
        </div>
    );
};

export {MovieByGenre};