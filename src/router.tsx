import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieCardPage, MoviesByGenrePage, MoviesListPage, SearchPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesListPage/>
            },
            {
                path: 'movie/:id', element: <MovieCardPage/>
            },
            {
                path: 'genres', element: <GenresPage/>, children: [
                    {
                        path: ':id', element: <MoviesByGenrePage/>
                    }
                ]
            },
            {
                path: 'search', element: <SearchPage/>, children: [
                    {
                        index: true, element: <Navigate to={'movies'}/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}