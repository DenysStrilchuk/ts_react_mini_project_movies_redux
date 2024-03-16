import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    genre:IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    );
};

export {Genre};