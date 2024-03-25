import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector, usePageQuery} from "../../../hooks";
import {genresAction} from "../../../store";
import css from "./GenresPagination.module.css";

const MoviesByGenresPagination = () => {
    const pageQuery = usePageQuery();
    const {page, prevPage, nextPage, setPage} = pageQuery;
    const {total_pages} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(genresAction.getByGenreId({id: parseInt(id), page: page}));
    }, [dispatch, id, page]);

    const isFirstPage = page === 1;
    const isLastPage = page === total_pages;

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber.toString());
    };

    let startPage = Math.max(1, page - 5);
    const endPage = Math.min(total_pages, page + 5);

    const showEllipsisStart = startPage > 1;
    const showEllipsisEnd = endPage < total_pages;

    if (page > endPage) {
        startPage = Math.max(1, endPage - 5);
    }

    const showFirstButton = startPage > 1;
    const showLastButton = endPage < total_pages;

    return (
        <div className={css.GenresPagination}>
            <button className={css.button} onClick={prevPage} disabled={isFirstPage}>
                Prev
            </button>
            {showFirstButton && (
                <button className={css.button} onClick={() => handlePageClick(1)}>
                    1
                </button>
            )}
            {showEllipsisStart && <span className={css.ellipsis}>...</span>}
            {Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i).map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`${css.button} ${pageNumber === page ? css.active : ""}`}
                >
                    {pageNumber}
                </button>
            ))}
            {showEllipsisEnd && <span className={css.ellipsis}>...</span>}
            {showLastButton && (
                <button className={css.button} onClick={() => handlePageClick(total_pages)}>
                    {total_pages}
                </button>
            )}
            <button className={css.button} onClick={nextPage} disabled={isLastPage}>
                Next
            </button>
        </div>
    );
};

export {MoviesByGenresPagination};
