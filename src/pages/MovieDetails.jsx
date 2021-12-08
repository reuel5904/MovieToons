import axios from '../axios.js'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import Footer from '../components/Footer.jsx';

export default function MovieDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    let nf = new Intl.NumberFormat('en-US');
    const base_url = "https://image.tmdb.org/t/p/original"
    const [movieDetails, setMovieDetails] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(() => {
        async function fetchMovieDetails(userId) {
            const requests = await axios.get(`https://api.themoviedb.org/3/movie/${userId || id}?api_key=52b74967f028be8c2e4c82fe1369a733&language=en-US`)
            const similarMoviesRequests = await axios.get(`https://api.themoviedb.org/3/movie/${userId || id}/recommendations?api_key=52b74967f028be8c2e4c82fe1369a733&language=en-US&page=1`)
            setMovieDetails(requests.data)
            setSimilarMovies(similarMoviesRequests.data.results)
            return requests
        }
        fetchMovieDetails(id)
    }, [id])

    return (
        <>
            <section className="movieDetails">
                <div className="container">
                    <div className="row">
                    {
                        <div className="movie" key={movieDetails.id}>
                            <div className="left__column">
                                <img src={`${movieDetails.poster_path === null || undefined ? base_url + movieDetails.poster_path : base_url + movieDetails.poster_path}`}  alt="" className="movie__img" />
                            </div>
                            <div className="right__column">
                                <div className="text__column">
                                    <h5 className="movie__release--date">Released: {movieDetails.release_date} - Language: {movieDetails.original_language}</h5>
                                    <h1 className="movie__title">{movieDetails.title}</h1>
                                    <h2 className="movie__runtime">
                                        Runtime: {(Math.floor(movieDetails.runtime / 60)) + "h:" + (movieDetails.runtime % 60) + "m"}
                                    </h2>
                                    <h3 className="movie__description"><span className="overview">Overview:</span> {movieDetails.overview}</h3>
                                    <div className="movie__boxOffice--container">
                                        <h2 className="movie__box--office">Box Office: ${nf.format(movieDetails.revenue)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    { 
                    similarMovies.length !== 0 ? (
                        <div className="similar__movies">
                            <div className="searchResults">
                                <h2 className="similar__movie--title">Recommended Movies</h2>
                                <div className="similar__movies--posters">
                                    {
                                        similarMovies
                                        .filter(movie => movie.poster_path !== null)
                                        .slice(0, 4)
                                        .map(movie => (
                                            <div className="search__result--movies" key={movie.id} onClick={() => navigate(`/searchResult/${movie.id}`)}>
                                                <img 
                                                src={`${movie.poster_path === null ? '' : base_url + movie.poster_path}`} 
                                                alt={`${movie.name}`} 
                                                key={movie.id}
                                                className="row__poster"
                                                />
                                                <span className="text-wrapper">
                                                    <p className="search__result--title">{movie.title}</p>
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                    }
                    </div>
                </div>
            </section>
            <Footer />
        </> 
    )
}
