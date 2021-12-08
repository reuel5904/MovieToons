import React, { useState, useEffect } from 'react'
import axios from '../axios.js'
import requests from "../Requests.jsx"
import { useNavigate } from 'react-router'
import Footer from '../components/Footer.jsx'
import SkeletonSearch from '../components/SkeletonSearch.jsx'
import SearchResultMovies from '../components/SearchResultMovies.jsx'

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
                            <h2 className="results">{`Results for "${searchResult}"`}</h2>
                            <div className="search__result--posters">
                                {
                                loading ? 
                                (new Array(9).fill(0).map((_, index) => (<SkeletonSearch key={index}/>))) 
                                : 
                                ( movieResults.filter(movie => movie.poster_path !== null).map(movie => (
                                <SearchResultMovies movie={movie} base_url={base_url} navigate={navigate} key={movie.id}/>))
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
