import React, { useState, useEffect } from 'react'
import axios from '../axios.js'
import requests from "../Requests.jsx"
import { useNavigate } from 'react-router'
import Footer from '../components/Footer.jsx'

export default function SearchResults() {
    let searchResult = localStorage.getItem("value")
    const navigate = useNavigate();
    const [movieResults, setMovieResults] = useState([])
    const [loading, setLoading] = useState(true)
    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(requests.fetchSearch + encodeURI(searchResult))
            setMovieResults(request.data.results)
            setLoading(false)
            return request
        }
        fetchMovies();
    }, [searchResult])

    return (
        <>
            <main className="searchResultsPage">
                <div className="container">
                    <div className="row">
                        <div className="searchResults">
                            <h2 className="results">{`Results for "${searchResult}" - ${movieResults.filter(movie => movie.poster_path !== null).length}`}</h2>
                            <div className="search__result--posters">
                                {
                                loading ? (
                                    new Array(9).fill(0).map((_, index) => (
                                        <div className="skeleton" key={index}>
                                        <div className="skeleton__body">
                                            <p className="skeleton__body--skeleton"></p>
                                        </div>
                                    </div>
                                    ))
                                ) : ( 
                                movieResults
                                .filter(movie => movie.poster_path !== null)
                                .map(movie => (
                                    <div className="search__result--movies" key={movie.id} onClick={() => navigate(`${movie.id}`)}>
                                        <img 
                                        src={`${movie.poster_path === null || undefined ? base_url + movie.poster_path : base_url + movie.poster_path}`} 
                                        alt={`${movie.name}`} 
                                        key={movie.id}
                                        className="row__poster"
                                        />
                                        <span className="text-wrapper">
                                            <p className="search__result--title">{movie.title}</p>
                                        </span>
                                    </div>
                                ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
