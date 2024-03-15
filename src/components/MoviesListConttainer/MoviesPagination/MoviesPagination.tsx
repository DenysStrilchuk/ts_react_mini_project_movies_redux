import { useEffect } from "react";

import { useAppDispatch, useAppSelector, usePageQuery } from "../../../hooks";
import { moviesActions } from "../../../store";
import css  from './Pagination.module.css';


const MoviesPagination = () => {
    const { page, prevPage, nextPage, setPage } = usePageQuery();
    const { total_pages } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll(page));
    }, [page, dispatch]);

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber.toString());
    };

    return (
        <div className={css.Pagination}>
            <button onClick={prevPage} className={css.button}>prev</button>
            {Array.from({ length: total_pages }, (_, i) => i + 1).map(pageNumber => (
                <button key={pageNumber} onClick={() => handlePageClick(pageNumber)} className={css.button}>
                    {pageNumber}
                </button>
            ))}
            <button onClick={nextPage} className={css.button}>next</button>
        </div>
    );
};

export { MoviesPagination };