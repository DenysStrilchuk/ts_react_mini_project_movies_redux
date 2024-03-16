import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";
import {genresAction} from "../../../store";
import {Genre} from "../Genre";

const Genres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresAction.getAll())
    }, [dispatch]);

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};