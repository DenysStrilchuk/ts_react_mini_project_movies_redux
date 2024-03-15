import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    movieCard:IMovie
}

const MovieCard: FC<IProps> = ({movieCard}) => {
    const{id, title}=movieCard;
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
        </div>
    );
};

export {MovieCard};