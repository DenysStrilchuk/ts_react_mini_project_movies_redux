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
    const lightUserImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8ElEQVR4nMVXTW9SQRSd3+Gimqir6kKb+BE1MeqCqgs3Ji7UJtqokYVQEXXRorSCMbWpC6PL1iqNYE2I1bh0o61tQSNCTFAMpTaA5aPEvj4x9poz+gg8Pt68lsrikMlw594zc+/cOY9JMpEIEimJHj97S6Zrg2Q43kOb9pupaftZDowxZ74+SO7RCUqmF4V8AkzLIBiO04WuAVq/6zytaWkXAmxNtgEKhRPLJ5Cez1Nnr5uatp0RDqwGTsfW56FMLq+PQCicoL1HbcsOrMbBkw6KfsuKEZj6EOU5rVdwBVsNl+jdx1htAqFwYlWCF5OIzmYrE0jP54WOfd3Oc3T15jCN+SM0l5E5ML7idPH/RNKRzf0qJ9DZ69ZcvMVgIX9gumpB+QLT3EbLj/Out5RAMBzXrHbsrlbwYhJaJ7Fxj7GQCoYf3HMt1jh20eZy2eHS9GfpefiXQCIlCTWZcX9EmMAb3xdNfxt2G+l7WiaG9ipSwTAWJYBWLOLTMzpBDL29UQQ67A+I4RERMa53CoDWEzeINe8zCRnjntezCIHNB8zE1u7Qbh7KNfQJXkM9PpmoMYAm46tDIyoh0CyYAgUgjCNGnlGYwOupz3xOz2YKKTAIFuFqAO8Cg4xqFIEO+xAxaLhGERh5MUkMOURb/N/BC61YkokLyEp6DoWFBpTK/hTuAQqwBmutjkfcl9o/Ul94DaGE1EbHjP20sLikO7AaP6Ql7qvYN27Lp0iyVJDY+jwVu99KSGAtTkDt194/UrBhygDSGddCbdxuvc8/SvQGT85JdMpyr8zf4TZnZUkmycSlM4SjelFLq5WGveOUW/itGRg2Lu9YVT9VRan0D5DOlRYrDrpue+jlqwB9jWX4qQGRWJrPQVfWWvs+OCP2YTITz9GR07fqduUOtTnLdl6TgCQTzxPU60p6BKq9+87TkpwLE5CUupjNcgGphwhsoXaUq1YLmgQUoGtBw6F/Q8ngJcMOAYwxd7F7iJ48n9Ql3/4AFJFnCn5fgNwAAAAASUVORK5CYII=";
    const darkUserImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACq0lEQVR4nMVXa2/aQBC8n+OURDVgBCkoaSKwKYTUfQgCJgQqAa0JEEXi1WJoSP/3VnPIFIzB5wDNh0GW2dud293bGzNJTpIIThSN1KsS3dZa1O4OaDia0mQy48Az3t1WW6RmDTqOpIV8AszLIJK45kHH1oymv/8IAbaVWouURO7lBAJhjW7KTZpMn4UDO4HsFIwGBUKqPwJKIkcPj6MXB3bivtsnOZYRIxB7r/Oa7iu4jd7AotiZvp2AksgdJPgyCTmacScQCGtCabesGRUr3+nd5ScKKBoHnkuVH/w/kXK8CavrBG7KTc/FfaTx/OPGhoqd69zGy8/XYn2VQCRx7dnt2N224MskvDLxa/y0KAXDD865F2ukXXS4oBxe/ow7c07gRNGEhkz84rMwAdh6+RuPn+hY0YhhvIp0MIxFCWAUi/hMXZWIiaT/UATKVZMYLhER432XAGh3BsSGP8UGDxprn00IDEZTYtZE7LKZH0Nd7Bj68MlEjf8NIn3nQbRCYChYgsWiyTNPMeqMxgTil1/mo9jHZhYlaAs24SGAe4FBRr0WgfKdSQwa7rUIpLJFYqghxuL/Dr4YxZKc5ALSTc/ZzRZYur9FgTVYa1RM7svpH6Vf3IZQQk6jhvlIkpzyHdiJo2CS+1r2jdOixHOrgqRgNDZMv11IpHgGnH7zRsNFkoVUfiycxrV6h3+U+A1+EknTt0Z3zV+r03OXZJKc5NIZwtG5qN+3SMsZdBT0zgZs0jljo5+NolSyx+mZ7rrYdlAoN+lCzVPwNMuzBoROs/wddOW2tVEXScfcdvE2+oHMdm9vR+6+01vb+VYCkpzkdYJ63WVGoNvzpfpKzYUJSHZfRDNcQPohAluoHfuobYMnARuYWtBwmN9QMrjJsEMAz3hnVE1SsyVf8u0v+hyPFjMCOegAAAAASUVORK5CYII=";


    const handleSearch = () => {
        dispatch(searchActions.getAll(query))
        navigate('search')
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    return (
        <div className={`${css.Header} ${theme === 'dark' ? css.dark : css.light}`}>
            <h1>Imovie</h1>
            <NavLink to={'movies'}>Movies</NavLink>

            <div className={`${css.input_style} ${theme === 'dark' ? css.dark : css.light}`}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <ThemeSwitcher/>
            <div className={css.user}>
                <img
                    src={theme === 'light' ? lightUserImageUrl : darkUserImageUrl}
                    alt={theme === 'light' ? 'light-user' : 'dark-user'}
                />
                <h4>Denys_S</h4>
            </div>
        </div>
    );
};

export {Header};