import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'helpers/fetchMovies';
import { ListWrap } from './Home.styled';
import MovieGallery from 'components/MovieGallery';
import MovieListtemplate from 'templates/MovieListTemplate';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    async function fetchFilms() {
      try {
        const films = await fetchTrendingFilms(controller);
        setMovies(films);
      } catch {
        return;
      }
    }

    fetchFilms();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ListWrap>
      <MovieGallery movies={movies} template={MovieListtemplate}></MovieGallery>
    </ListWrap>
  );
};

export default Home;
