import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'helpers/fetchMovies';
import { ListWrap } from './Home.styled';
import MovieGallery from 'components/MovieGallery';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchFilms() {
      try {
        setLoading(true);
        const films = await fetchTrendingFilms(controller);

        setMovies(films);
      } catch {
        return;
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ListWrap>
      <MovieGallery
        loader={loading}
        movies={movies}
        homePage={true}
      ></MovieGallery>
    </ListWrap>
  );
};

export default Home;
