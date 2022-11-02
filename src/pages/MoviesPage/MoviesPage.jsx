import { FormWrap } from './MoviesPage.styled';
import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { searchMoviesByName } from 'helpers/fetchMovies';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    if (!searchQuery) return;
    (async function getFilms() {
      try {
        const result = await searchMoviesByName(searchQuery, controller);
        setMovies(result.results);
      } catch {
        return;
      }
    })();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  //   console.log(movies);
  return (
    <FormWrap>
      <SearchForm setQuery={setSearchQuery}></SearchForm>
    </FormWrap>
  );
};

export default MoviesPage;
