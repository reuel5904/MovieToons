const API_KEY = "52b74967f028be8c2e4c82fe1369a733"

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchSearch: `/search/movie/?api_key=${API_KEY}&language=en-US&query=`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`
}

export default requests;



// 52b74967f028be8c2e4c82fe1369a733