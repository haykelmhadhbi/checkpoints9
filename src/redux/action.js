export const setFavourite = (payload) => ({
    type: "SET_FAVOURITE",
    payload: payload
})

export const removeFavourite = (payload) => ({
    type: "REMOVE_FAVOURITE",
    payload: payload
})

export const setCurrentMovieDetail = (payload) => ({
    type: "SET_CURRENT_MOVIE_DETAIL",
    payload: payload
})

export const getPopularMovies = () => ({
    type: "GET_POPULAR_MOVIES"
})

export const getTopRatedMovies = () => ({
    type: "GET_TOP_RATED_MOVIES"
})

export const getUpComingMovies = () => ({
    type: "GET_UPCOMING_MOVIES"
})