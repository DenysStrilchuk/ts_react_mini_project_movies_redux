import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const usePageQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = searchParams.get('page');
    const page = pageParam ? parseInt(pageParam) : 1;

    useEffect(() => {
        if (!pageParam) {
            setSearchParams({ page: '1' });
        }
    }, [pageParam, setSearchParams]);

    const prevPage = async () => {
        if (page && page > 1) {
            setSearchParams({ page: (page - 1).toString() });
        }
    };

    const nextPage = async () => {
        if (page) {
            setSearchParams({ page: (page + 1).toString() });
        }
    };

    const setPage = (newPage: string) => {
        setSearchParams({ page: newPage });
    };

    return {
        page,
        prevPage,
        nextPage,
        setPage
    };
};

export { usePageQuery };
