import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../store";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const MoviesPagination = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = searchParams.get('page');
    const page = pageParam ? parseInt(pageParam) : 1;
    const { total_pages } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!pageParam) {
            setSearchParams({ page: '1' });
        }
    }, [pageParam, setSearchParams]);

    const prevPage = async () => {
        if (page && page > 1) {
            await dispatch(moviesActions.getAll(page - 1));
            setSearchParams({ page: (page - 1).toString() });
        }
    }
    const nextPage = async () => {
        if (page && total_pages && page < total_pages) {
            await dispatch(moviesActions.getAll(page + 1));
            setSearchParams({ page: (page + 1).toString() });
        }
    }

    const handlePageClick = (pageNumber: number) => {
        dispatch(moviesActions.getAll(pageNumber));
        setSearchParams({ page: pageNumber.toString() });
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