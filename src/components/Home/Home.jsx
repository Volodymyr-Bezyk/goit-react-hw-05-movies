import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'helpers/fetchMovies';
import MovieItem from 'components/MovieItem/MovieItem';
import { List, ListItem } from './Home.styled';
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
    <div>
      <List>
        {movies.length > 0
          ? movies.map(movie => (
              <ListItem key={movie.id}>
                <MovieItem filmInfo={movie}></MovieItem>
              </ListItem>
            ))
          : MovieListtemplate.map(t => (
              <ListItem key={t.id}>{t.content}</ListItem>
            ))}
      </List>
    </div>
  );
};

export default Home;
