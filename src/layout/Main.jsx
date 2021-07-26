import { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, isLoading] = useState(true);

  const searchWith = (word, type = 'all') => {
    isLoading(true);

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${word}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(responce => responce.json())
      .then(data => {
        setMovies(data.Search);
        isLoading(false);
      })
      .catch((err) => {
        console.error(err);
        isLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=shrek`)
      .then(responce => responce.json())
      .then(data => {
        setMovies(data.Search);
        isLoading(false)
      })
      .catch((err) => {
        console.error(err);
        isLoading(false)
      });
  }, []);

  return (
    <main className="container content">
      <Search searchWith={searchWith} />
      {
        loading ? <Preloader /> : <Movies movies={movies} />
      }
    </main>
  );

};

export { Main };
