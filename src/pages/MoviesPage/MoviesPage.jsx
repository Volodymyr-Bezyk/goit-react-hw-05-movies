import { FormWrap } from './MoviesPage.styled';
import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { searchMoviesByName } from 'helpers/fetchMovies';
import MovieGallery from 'components/MovieGallery';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (!searchQuery) return;
    (async function getFilms() {
      try {
        setLoading(true);
        const result = await searchMoviesByName(searchQuery, controller);

        setMovies(result.results);
      } catch {
        return;
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <div>
      <FormWrap>
        <SearchForm setQuery={setSearchQuery}></SearchForm>
      </FormWrap>
      <MovieGallery movies={movies} loader={loading}></MovieGallery>
    </div>
  );
};

export default MoviesPage;
