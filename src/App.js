import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';
import Discover from './pages/Discover';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/searchresult" element={<SearchResults />}></Route>
          <Route path="/searchresult/:id" element={<MovieDetails />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
