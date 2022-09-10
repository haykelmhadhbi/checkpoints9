import React, {useEffect} from "react"
import "./movieListPage.css"
import Card from "../../components/cards/cards"
import { useDispatch, useSelector } from "react-redux"
import { getUpComingMovies} from "../../redux/action"

const UpcomingMovieListPage = () => {

    const dispatch = useDispatch()
    const upcomingMovies = useSelector(state => state.upcomingMovies)
    
    useEffect(() => {
        dispatch(getUpComingMovies())
    },[])

    return (
        <div className="movie_group">
            <h2 className="list_title">Upcoming Movies</h2>
            <div className="movies_card">
                {
                    upcomingMovies.map(movie => <Card movie={movie} />)
                }
            </div>
        </div>
    );
};

export default UpcomingMovieListPage;