import { useAppDispatch, useAppSelector } from "../../../hooks";
import { moviesActions } from "../../../store";
import { useEffect } from "react";
import { usePageQuery } from "../../../hooks";

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
        <div>
            <button onClick={prevPage}>prev</button>
            {Array.from({ length: total_pages }, (_, i) => i + 1).map(pageNumber => (
                <button key={pageNumber} onClick={() => handlePageClick(pageNumber)}>
                    {pageNumber}
                </button>
            ))}
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export { MoviesPagination };
