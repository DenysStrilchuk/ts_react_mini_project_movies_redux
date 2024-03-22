import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import {useState} from "react";
import css from './SearchMoviesForm.module.css';
import {useAppSelector} from "../../../hooks";

interface FormData {
    query: string;
}

const SearchMoviesForm = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const navigate = useNavigate();
    const [, setQuery] = useState<string>("");
    const {mode} = useAppSelector(state => state.theme);

    const handleSearch = (data: FormData) => {
        navigate(`search/${data.query}`);
        reset()
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <form className={`${css.input_style} ${mode === 'dark' ? css.dark : css.light}`} onSubmit={handleSubmit(handleSearch)}>
            <input
                type="text"
                placeholder="Search movies..."
                onChange={handleInputChange}
                {...register("query")}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export { SearchMoviesForm };
