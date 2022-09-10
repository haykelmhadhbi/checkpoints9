import React from 'react'
import MovieList from "../../components/movieList/movieList"

const Home = () => {
    return (
        <>
            <MovieList popular />
            <MovieList top_rated />
            <MovieList upcoming />  
        </>
    );
};

export default Home;