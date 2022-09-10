const initialState = {
    favouriteMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    currentMovieDetail: {}
}

const reducer =  (state=initialState, action) => {
    switch(action.type){
        case "SET_FAVOURITE_ASYNC":
            return {
                ...state,
                favouriteMovies: [ ...state.favouriteMovies, action.payload.payload ]
            }
        case "REMOVE_FAVOURITE_ASYNC":
            return {
                ...state,
                favouriteMovies: state.favouriteMovies.filter(movie => movie != action.payload.payload)
            }
        case "GET_POPULAR_MOVIES_ASYNC":
            return {
                ...state,
                popularMovies: [...action.payload]
            }
        case "GET_TOP_RATED_MOVIES_ASYNC":
            return {
                ...state,
                topRatedMovies: [...action.payload]
            }
        case "GET_UPCOMING_MOVIES_ASYNC":
            return {
                ...state,
                upcomingMovies: [...action.payload]
            }
        case "SET_CURRENT_MOVIE_DETAIL_ASYNC":
            return {
                ...state,
                currentMovieDetail: { ...action.payload }
            }
        default:
            return state
    }
}

export default reducer