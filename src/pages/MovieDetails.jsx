import axios from '../axios.js'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import Footer from '../components/Footer.jsx';
import MovieDetailsTop from '../components/MovieDetailsTop.jsx';
import Recommended from '../components/Recommended.jsx';

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
                    <MovieDetailsTop nf={nf} movieDetails={movieDetails} base_url={base_url}/>
                    { similarMovies.length !== 0 ? (<Recommended navigate={navigate} base_url={base_url} similarMovies={similarMovies} />) : (null) }
                    </div>
                </div>
            </section>
            <Footer />
        </> 
    )
}
