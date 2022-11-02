import { FormWrap } from './MoviesPage.styled';
import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { searchMoviesByName } from 'helpers/fetchMovies';
import MovieGallery from 'components/MovieGallery';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query');
  console.log(query);

  useEffect(() => {
    const controller = new AbortController();
    if (!query) return;
    (async function getFilms() {
      try {
        setLoading(true);
        const result = await searchMoviesByName(query, controller);

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
  }, [query]);

  return (
    <div>
      <FormWrap>
        <SearchForm setSearchParams={setSearchParams}></SearchForm>
      </FormWrap>
      <MovieGallery movies={movies} loader={loading}></MovieGallery>
    </div>
  );
};

export default MoviesPage;
