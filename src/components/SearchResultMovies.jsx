import React from 'react'

export default function SearchResultMovies({ movie, base_url, navigate }) {
    return (
        <>
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
        </>
    )
}
