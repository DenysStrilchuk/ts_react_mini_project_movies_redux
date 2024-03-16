import {FC, PropsWithChildren} from 'react';

import {IGenre} from "../../interfaces";
import css from './MovieInfo.module.css';
import {MyCustomStarRating} from "../StarRatingContainer";

interface IProps extends PropsWithChildren {
    title: string,
    overview: string,
    vote_average: number,
    backdrop_path: string,
    release_date: string,
    runtime: number,
    genres: IGenre[];
}

const MovieInfo: FC<IProps> = ({title, overview, vote_average, backdrop_path,
                                   release_date, runtime, genres}) => {
    return (
        <div className={css.MovieInfo}>
            <div className={css.title}>{title}</div>
            <div className={css.infoBlock}>
                <img className={css.backdropStyle} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title}/>
                <div className={css.info}>
                    <h2>Runtime: {runtime}  minutes</h2>
                    <h2>Release date: {release_date}</h2>
                </div>
            </div>
            <div className={css.stars}>
                <MyCustomStarRating rating={vote_average}/>
            </div>
            <h2 className={css.summary}>Summary:</h2>
            <div className={css.overview}>{overview}</div>
        </div>
    );
};

export {MovieInfo};