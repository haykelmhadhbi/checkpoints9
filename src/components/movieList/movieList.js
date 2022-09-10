import React, { useEffect, useState } from 'react'
import Cards from "../cards/cards"
import "./movieList.css"

const MovieList = (props) => {
    const type = Object.keys(props)[0]

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    },[])

    return (
        <div className="movie__group">
            <h2 className="list__title">{type==="top_rated" ? "TOP RATED" : type.toUpperCase()}</h2>
            <div className="movie__list">
                {
                    movieList && movieList.map(movie => <Cards movie={movie} />)
                }
                {/* <Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /> */}
            </div>
        </div>
    );
};

export default MovieList;