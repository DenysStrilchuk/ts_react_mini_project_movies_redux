import React, {useEffect} from "react";

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

    const isFirstPage = page === 1;
    const isLastPage = page === total_pages;

    const startPage = Math.max(1, page - 5);
    const endPage = Math.min(total_pages, page + 5);

    const showEllipsis = total_pages > 6 && (endPage < total_pages);
    const showLastPage = total_pages > 6 && (endPage < total_pages);

    return (
        <div className={css.Pagination}>
            <button className={css.button} onClick={prevPage} disabled={isFirstPage}>Prev</button>
            {Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i).map(pageNumber => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`${css.button} ${pageNumber === page ? css.active : ''}`}
                >
                    {pageNumber}
                </button>
            ))}
            {showEllipsis && <span className={css.ellipsis}>...</span>}
            {showLastPage && (
                <button
                    key={total_pages}
                    onClick={() => handlePageClick(total_pages)}
                    className={`${css.button} ${total_pages === page ? css.active : ''}`}
                >
                    {total_pages}
                </button>
            )}
            <button className={css.button} onClick={nextPage} disabled={isLastPage}>Next</button>
        </div>
    );
};

export {MoviesPagination};
