import React, {useEffect, useState} from 'react'
import "./movie.css"
import { useParams } from "react-router-dom"
import ReactHlsPlayer from "react-hls-player"
import { useDispatch, useSelector } from "react-redux"
import { setFavourite, removeFavourite, setCurrentMovieDetail } from "../../redux/action"

const Movie = () => {
    const dispatch = useDispatch()
    const favouriteMovies = useSelector(state => state.favouriteMovies)
    const currentMovieDetail = useSelector(state => state.currentMovieDetail)
    const [showHslPlayer, setShowHslPlayer] = useState(false)
    const { id } = useParams()  
    const [ showFavourite, setShowFavourite] = useState(false)

    useEffect(() => {
        dispatch(setCurrentMovieDetail(id))
    }, [])

    useEffect(() => {
        favouriteMovies.map(favMovie => {
            if(favMovie.id === currentMovieDetail.id){
                setShowFavourite(true)
                // return <span className="favourite" onClick={() => dispatch(removeFavourite(currentMovieDetail))}>Favourite<i class="newTab favouriteOne fas fa-heart"></i></span>
            }
        })
    }, [favouriteMovies])

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis
                        {
                            showFavourite
                            ?
                            <span className="favourite" onClick={() => {dispatch(removeFavourite(currentMovieDetail)); setShowFavourite(false)}}>Favourite<i class="newTab favouriteOne fas fa-heart"></i></span>
                            :
                            <span className="favourite" onClick={() => {dispatch(setFavourite(currentMovieDetail)); setShowFavourite(true)}}>Add to favourite<i class="newTab nonFavourite far fa-heart"></i></span>
                        }
                        </div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && <a><p><span className="movie__previewButton movie__Button" onClick={() => setShowHslPlayer(!showHslPlayer)}>Preview video{showHslPlayer ? <i class="newTab far fa-eye" /> : <i class="newTab far fa-eye-slash"></i>}</span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            {
                showHslPlayer
                && 
                <>
                    <div className="movie__heading">Movie preview video </div>
                    <div className="movie__hlsPlayer">
                        <ReactHlsPlayer
                            src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
                            autoPlay={true}
                            controls={true}
                            width="75%"
                        />
                    </div>
                </>
            }
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default Movie;