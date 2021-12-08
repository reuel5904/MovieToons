import React from 'react'
import Footer from '../components/Footer.jsx'
import MovieRows from '../components/MovieRows.jsx'
import requests from "../Requests.jsx"

export default function Discover() {
    return (
        <div>
            <MovieRows title='TOP RATED' fetchUrl={requests.fetchTopRated}/>
            <MovieRows title='POPULAR' fetchUrl={requests.fetchPopular}/>
            <MovieRows title='UPCOMING' fetchUrl={requests.fetchUpcoming}/>
            <MovieRows title='NOW PLAYING' fetchUrl={requests.fetchNowPlaying}/>
            <Footer />
        </div>
    )
}
