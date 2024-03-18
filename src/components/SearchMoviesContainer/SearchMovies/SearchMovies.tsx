import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect, useState} from "react";
import {searchActions} from "../../../store";
import {Movie} from "../../MoviesListConttainer";

const SearchMovies = () => {
    const {movies} = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        dispatch(searchActions.getAll(''))
    }, [dispatch]);

    const handleSearch = () => {
        dispatch(searchActions.getAll(query));
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {movies && movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export {SearchMovies};