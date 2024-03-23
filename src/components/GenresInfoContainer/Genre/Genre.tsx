import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces";
import {Badge, Button} from "react-bootstrap";
import css from './Genre.module.css';
import {useNavigate, useLocation} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre:IGenre
    onGenreClick: (genre: IGenre) => void;
    isActive: boolean;
    count: number;
}



const Genre: FC<IProps> = ({genre,  isActive, count}) => {
    const {id, name} = genre;
    const navigate = useNavigate();
    const location = useLocation();

    const isGenresPage = location.pathname.startsWith('/genres');
    return (
        <div>
            <Button className={`${css.genre_badge} ${isActive && isGenresPage ? css.active : ''}`}
                    onClick={() => navigate(`/genres/${id}`)}
                    variant="primary">
                {name}<Badge className={css.numbers} bg="secondary"> {count}</Badge>
            </Button>
        </div>
    );
};

export {Genre};