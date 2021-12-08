import axios from '../axios.js'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function MovieRows({ title, fetchUrl }) {
    const navigate = useNavigate();
    const base_url = "https://image.tmdb.org/t/p/original"
    const [movieRows, setMovieRows] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchMovieRows() {
            const request = await axios.get(fetchUrl);
            setMovieRows(request.data.results)
            setLoading(false)
            return request;
        }
        fetchMovieRows()
    }, [fetchUrl])

    console.log(movieRows)

    return (
        <div className="movieRows">
            <h2 className="movieRows__title">{title} MOVIES</h2>
            <div className="movieRows__posters">
            {
                loading ? (
                    new Array(9).fill(0).map((_, index) => (
                        <div className="skeleton" key={index}>
                        <div className="skeleton__movieRow">
                            <p className="skeleton__movieRow--skeleton"></p>
                        </div>
                    </div>
                    ))
                ) : (
                movieRows.map(movie => (
                        <img 
                        className="movieRow__poster"
                        key={movie.id}
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                        onClick={() => navigate(`/searchresult/${movie.id}`)}
                        />
                )))
            }
            </div>
        </div>
    )
}
