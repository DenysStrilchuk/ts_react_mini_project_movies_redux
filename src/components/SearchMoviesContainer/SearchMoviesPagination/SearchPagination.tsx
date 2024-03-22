import {useAppDispatch, useAppSelector, usePageQuery} from "../../../hooks";
import React, {useEffect} from "react";
import {searchActions} from "../../../store";
import css from "../../MoviesByGenre/MoviesByGenresPagination/GenresPagination.module.css";
import {useParams} from "react-router-dom";

const SearchPagination = () => {
    const {page, prevPage, nextPage, setPage} = usePageQuery();
    const { query } = useParams<{ query: string }>();
    const { total_pages } = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchActions.getAll({ query, page}));
    }, [dispatch,query,page]);

    const isFirstPage = page === 1;
    const isLastPage = page === total_pages;

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber.toString());
        dispatch(searchActions.getAll({ query, page: pageNumber }));
    };
    return (
        <div className={css.GenresPagination}>
            <button className={css.button} onClick={prevPage} disabled={isFirstPage}>Prev</button>
            {Array.from({length: total_pages}, (_, i) => i + 1).map(pageNumber => (
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

export {SearchPagination};