import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import MovieList from "./components/MovieList/MovieList";
import { AUTH_KEY } from "./constants";

const items = [
  {
    id: 0,
    text: "Home",
    href: "/#",
  },
  {
    id: 1,
    text: "TV Shows",
    href: "/#",
  },
  {
    id: 2,
    text: "Movies",
    href: "/#",
  },
  {
    id: 3,
    text: "New & Popular",
    href: "/#",
  },
];

const BASE_URL = "https://api.themoviedb.org/3/movie/";

function App() {

  const [popularList, setPopularList] = useState([])
  const [topRatedList, setTopRatedList] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}popular`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_KEY}`
      }
    }).then(res => res.json()).then(data => setPopularList(data.results))

    fetch(`${BASE_URL}top_rated`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_KEY}`
      }
    }).then(res => res.json()).then(data => setTopRatedList(data.results))
  }, []);

  return (
    <div>
      <Navigation items={items} />
      <MovieList movieList={popularList} />
    </div>
  );
}

export default App;
