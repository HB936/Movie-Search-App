import { useEffect, useState, useCallback } from 'react'
import './App.css'
import Search from './Search'
import Display from './Display'
import debounce from "lodash/debounce";

function App() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])


  const getMovies = useCallback(async () => {
    let API = "";
    if (search !== "") {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
    } else {
      API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    }
    const response = await fetch(API);
    const data = await response.json();
    setMovies(data.results);
  }, [search]);

  const debouncedFetch = useCallback(
    debounce(() => getMovies(), 500),
    [getMovies]
  );

  const searchHandler = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    if (search === "") {
      getMovies();
    } else {
      debouncedFetch();
    }

    return () => {
      debouncedFetch.cancel();
    };
  }, [search, getMovies, debouncedFetch]
  );



  return (
    <>
      <Search searchHandler={searchHandler} />
      <div className="container">
        <Display results={movies} />
      </div>
    </>
  )
}

export default App
