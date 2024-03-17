import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector, usePageQuery } from "../../../hooks";
import { genresAction } from "../../../store";
import { useParams } from "react-router-dom";
import css from "./GenresPagination.module.css";

const MoviesByGenresPagination = () => {
    const pageQuery = usePageQuery();
    const { page, prevPage, nextPage, setPage} = pageQuery;
    const { total_pages } = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(genresAction.getByGenreId({ id: parseInt(id), page: page }));
    }, [dispatch, id, page]);

    const isFirstPage = page === 1;
    const isLastPage = page === total_pages;

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber.toString());
    };

    return (
        <div className={css.GenresPagination}>
            <button className={css.button} onClick={prevPage} disabled={isFirstPage}>Prev</button>
            {Array.from({ length: total_pages }, (_, i) => i + 1).map(pageNumber => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`${css.button} ${pageNumber === page ? css.active : ''}`}
                >
                    {pageNumber}
                </button>
            ))}
            <button className={css.button} onClick={nextPage} disabled={isLastPage}>Next</button>
        </div>
    );
};

export {MoviesByGenresPagination};
