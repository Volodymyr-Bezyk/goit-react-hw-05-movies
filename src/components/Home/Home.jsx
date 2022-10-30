import { useState, useEffect } from 'react';
import { fetchTrendingFilms } from 'helpers/fetchMovies';
import MoovieItem from 'components/MovieItem/MoovieItem';
import { List, ListItem } from './Home.styled';
import MoovieListtemplate from 'templats/MoovieListTemplate';

const Home = () => {
  const [moovies, setMoovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();

    async function fetchFilms() {
      try {
        const films = await fetchTrendingFilms(controller);
        setMoovies(films);
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
        {moovies.length > 0
          ? moovies.map(moovie => (
              <ListItem key={moovie.id}>
                <MoovieItem filmInfo={moovie}></MoovieItem>
              </ListItem>
            ))
          : MoovieListtemplate.map(t => (
              <ListItem key={t.id}>{t.content}</ListItem>
            ))}
      </List>
    </div>
  );
};

export default Home;
