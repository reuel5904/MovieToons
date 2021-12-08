import React from 'react'

export default function MovieDetailsTop({ nf, movieDetails, base_url }) {
    return (
        <>
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
        </>
    )
}
