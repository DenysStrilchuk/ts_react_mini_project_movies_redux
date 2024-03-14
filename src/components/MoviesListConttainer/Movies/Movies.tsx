import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect, useState} from "react";
import {moviesActions} from "../../../store";
import {Movie} from "../Movie";

const Movies = () => {
    const {movies,page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(moviesActions.getAll(page))
            .then(() => setLoading(false));
    }, [dispatch, page]);

    useEffect(() => {
        if (!loading) {
            console.log("Movies:", movies); // Перевірка отриманих даних
        }
    }, [loading, movies]);

    if (loading) {
        return <div>Loading...</div>; // Відображаємо "Loading..." поки дані завантажуються
    }
    return (
        <div>
            {movies.length > 0 && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};