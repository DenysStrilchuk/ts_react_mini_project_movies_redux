import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";

import  css from './Header.module.css';
import {searchActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ThemeSwitcher} from "../ThemeSwitcherContainer";


const Header = () => {
    const [query, setQuery] = useState<string>("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const theme = useAppSelector(state => state.theme.mode);

    const handleSearch = () => {
        dispatch(searchActions.getAll(query))
        navigate('search')
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    return (
        <div className={`${css.Header} ${theme}`}>
            <h1>Imovie</h1>
            <NavLink to={'movies'}>Movies</NavLink>

            <div className={css.input_style}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <ThemeSwitcher/>
        </div>
    );
};

export {Header};