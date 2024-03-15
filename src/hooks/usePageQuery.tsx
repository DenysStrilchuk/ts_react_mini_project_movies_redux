import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams();
    const pageParam = query.get('page');
    const page = pageParam ? parseInt(pageParam) : 1;

    useEffect(() => {
        if (!pageParam) {
            setQuery({ page: '1' });
        }
    }, [pageParam, setQuery]);

    const prevPage = async () => {
        if (page && page > 1) {
            setQuery({ page: (page - 1).toString() });
        }
    };

    const nextPage = async () => {
        if (page) {
            setQuery({ page: (page + 1).toString() });
        }
    };

    const setPage = (newPage: string) => {
        setQuery({ page: newPage });
    };

    return {
        page,
        prevPage,
        nextPage,
        setPage
    };
};

export { usePageQuery };
