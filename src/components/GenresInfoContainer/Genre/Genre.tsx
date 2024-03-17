import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces";
import {Badge, Button} from "react-bootstrap";
import css from './Genre.module.css';
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre:IGenre
    onGenreClick: (genre: IGenre) => void;
    isActive: boolean;
}

const Genre: FC<IProps> = ({genre,  isActive}) => {
    const {id, name} = genre;
    const navigate = useNavigate();
    return (
        <div>
            <Button className={`${css.genre_badge} ${isActive ? css.active : ''}`}
                    onClick={() => navigate(`/genres/${id}`)}
                    variant="primary">
                {name}<Badge className={css.numbers} bg="secondary"> 9</Badge>
            </Button>
        </div>
    );
};

export {Genre};