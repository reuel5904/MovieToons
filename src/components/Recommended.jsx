import React from 'react'

export default function Recommended({ navigate, base_url, similarMovies }) {
    return (
        <>
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
        </>
    )
}
