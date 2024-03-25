import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from './SearchMoviesForm.module.css';
import {useAppSelector} from "../../../hooks";
import {joiResolver} from "@hookform/resolvers/joi";
import {searchValidator} from "../../../validators";


interface FormData {
    query: string;
}

const SearchMoviesForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>({
        mode: 'all',
        resolver: joiResolver(searchValidator)
    });
    const navigate = useNavigate();
    const {mode} = useAppSelector(state => state.theme);

    const handleSearch = (data: FormData) => {
        navigate(`search/${data.query}`);
        reset()
    };


    return (
        <form className={`${css.input_style} ${mode === 'dark' ? css.dark : css.light}`}
              onSubmit={handleSubmit(handleSearch)}>
            <input
                type="text"
                placeholder="Search movies..."
                {...register("query")}
            />
            <button type="submit">Search</button>
            {errors.query && <div>{errors.query.message}</div>}
        </form>
    );
};

export {SearchMoviesForm};
