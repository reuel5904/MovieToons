import React from 'react'

export default function Header({ movie, onSearch, searchValue, setSearchValue }) {
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: movie ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")` : null,
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
    )
}
