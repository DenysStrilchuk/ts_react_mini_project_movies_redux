import {FC, PropsWithChildren} from 'react';

import {IGenre} from "../../interfaces";
import css from './MovieInfo.module.css';
import {MyCustomStarRating} from "../StarRatingContainer";
import {Genre} from "../GenresInfoContainer";
import {useAppSelector} from "../../hooks";

interface IProps extends PropsWithChildren {
    title: string,
    overview: string,
    vote_average: number,
    backdrop_path: string,
    release_date: string,
    runtime: number,
    genres: IGenre[];
    onGenreClick: (genre: IGenre) => void;
}

const MovieInfo: FC<IProps> = ({title, overview, vote_average, backdrop_path,
                                   release_date, runtime, genres, onGenreClick}) => {
    const activeGenreId = useAppSelector(state => state.genres.activeGenreId);
    const {genreMoviesCount} = useAppSelector(state => state.genres);

    return (
        <div className={css.MovieInfo}>
            <div className={css.title}>{title}</div>
            <div className={css.infoBlock}>
                <img className={css.backdropStyle} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title}/>
                <div className={css.info}>
                    <h2>Genres:</h2>
                    <div className={css.genres}>
                        {genres.map((genre, index) => (
                            <Genre
                                key={index}
                                genre={genre}
                                onGenreClick={onGenreClick}
                                isActive={genre.id === activeGenreId}
                                count={genreMoviesCount[genre.id] || 0}
                            />
                        ))}
                    </div>
                    <h2>Runtime: {runtime} minutes</h2>
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