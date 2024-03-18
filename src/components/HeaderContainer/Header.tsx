import {NavLink} from "react-router-dom";

import  css from './Header.module.css';


const Header = () => {
    return (
        <div className={css.Header}>
            <h1>Imovie</h1>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
        </div>
    );
};

export {Header};