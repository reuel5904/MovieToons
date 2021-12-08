import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../axios.js'
import requests from "../Requests.jsx"
import MediaQuery from 'react-responsive'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

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
            <Header movie={movie} onSearch={onSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
            <MediaQuery query="(max-device-width: 768px)">
                <Footer />
            </MediaQuery>
        </>
    )
}
