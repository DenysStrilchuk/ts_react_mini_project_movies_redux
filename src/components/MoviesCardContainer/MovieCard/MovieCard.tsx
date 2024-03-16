import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";
import {MovieInfo} from "../../MovieInfoContainer";

interface IProps extends PropsWithChildren {
    movieCard:IMovie
}

const MovieCard: FC<IProps> = ({movieCard}) => {
    const{title, overview, vote_average, genres, backdrop_path,
        release_date, runtime}=movieCard;
    return (
        <div>
            <MovieInfo title={title} overview={overview} vote_average={vote_average}
            genres={genres} backdrop_path={backdrop_path} release_date={release_date} runtime={runtime} />
        </div>
    );
};

export {MovieCard};