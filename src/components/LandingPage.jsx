import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../axios.js'
import requests from "../Requests.jsx"
import MediaQuery from 'react-responsive'
import Footer from '../components/Footer.jsx'

export default function LandingPage() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState()
    const [movie, setMovie] = useState([])

    function onSearch() {
        navigate('/searchresult')
        localStorage.setItem("value", searchValue)
    }

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(requests.fetchPopular)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            )
            return request
        }
        fetchMovies()
    }, [])


    return (
        <>
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: movie ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` : null,
                backgroundPosition: "center, center",
            }}> 

                <div className="banner--fadeBottom">
                    <h1 className="banner__title">Search for your favorite movie</h1>
                    <div className="banner__contents">
                        <div className="search__container">
                            <input 
                            type="text" 
                            placeholder={movie.title} 
                            value={searchValue || '' }
                            onChange={(event) => setSearchValue(event.target.value)}
                            onKeyPress={(event) => event.key === 'Enter' && onSearch()}
                            />
                            <div className="search"></div>
                        </div>
                    </div>
                </div>
            </header>
            <MediaQuery query="(max-device-width: 768px)">
                <Footer />
            </MediaQuery>
        </>
    )
}
