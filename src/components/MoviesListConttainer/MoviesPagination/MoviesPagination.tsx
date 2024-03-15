import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../store";

const MoviesPagination = () => {
    const {page, total_pages} =useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const prevPage = () => {
        if (page && page > 1) {
            dispatch(moviesActions.getAll(page - 1));
        }
    }
    const nextPage = () => {
        if (page && total_pages && page < total_pages) {
            dispatch(moviesActions.getAll(page + 1));
        }
    }

    const handlePageClick = (pageNumber: number) => {
        dispatch(moviesActions.getAll(pageNumber));
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

export {MoviesPagination};