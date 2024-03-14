import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <img src={poster_path} alt={title}/>
        </div>
    );
};

export {Movie};