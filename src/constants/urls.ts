const baseURL = 'https://api.themoviedb.org/3';

const movie = '/discover/movie';
const movieDetails = '/movie';
const genres = '/genre/movie/list';
const search = '/search/movie';

const urls = {
    movie: {
        base: movie
    },
    movieDetails: {
        movieById: (id: number): string => `${movieDetails}/${id}`
    },
    genres: {
        base: genres,
        byGenreId: (genreId: number): string => `${movie}?with_genres=${genreId}`
    },
    search: {
        base: search
    }

}

export {
    baseURL,
    urls
}