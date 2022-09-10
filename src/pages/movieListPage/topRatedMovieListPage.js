import React, {useEffect} from 'react'
import "./movieListPage.css"
import Card from "../../components/cards/cards"
import { useDispatch, useSelector } from "react-redux"
import {getTopRatedMovies} from "../../redux/action"

const TopRatedMovieListPage = () => {

    const dispatch = useDispatch()
    const topRatedMovies = useSelector(state => state.topRatedMovies)

    useEffect(() => {
        dispatch(getTopRatedMovies())
    },[])

    return (
        <div className="movie_group">
            <h2 className="list_title">Top Rated Movies</h2>
            <div className="movies_card">
                {
                    topRatedMovies.map(movie => <Card movie={movie} />)
                }
            </div>
        </div>
    );
};

export default TopRatedMovieListPage;