import React from 'react'
import { useParams } from 'react-router'
import PopularMovieListPage from './popularMovieListPage'
import TopRatedMovieListPage from './topRatedMovieListPage'
import UpcomingMovieListPage from './upcomingMoviesListPage'
import MyFavouriteMovieListPage from './myFavouriteMovieList'


const MovieListPage = () => {

    const { type } = useParams()

    return (
        <>
            {
                (type === "popular") && <PopularMovieListPage />
            } 
            {
                (type === "top_rated") && <TopRatedMovieListPage />
            }
            {
                (type === "upcoming") && <UpcomingMovieListPage />
            } 
            {
                (type === "my-favourite") && <MyFavouriteMovieListPage />
            }
        </>
    );
};

export default MovieListPage;