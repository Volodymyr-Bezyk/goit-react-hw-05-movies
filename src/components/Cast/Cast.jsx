import { useParams } from 'react-router-dom';
import { getFilmCredits } from 'helpers/fetchMovies';
import { useEffect, useState } from 'react';
import Box from 'components/Box';
import CastItem from 'components/CastItem';
import { SubTitle, ListItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getCredits = async () => {
      try {
        const result = await getFilmCredits(movieId, controller);
        setActors(result);
      } catch {
        return;
      }
    };
    getCredits();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (actors.length === 0) return;

  return (
    <div>
      <SubTitle>Actors:</SubTitle>
      <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center">
        {actors.map(actor => (
          <ListItem key={actor.id}>
            <CastItem actor={actor}></CastItem>
          </ListItem>
        ))}
      </Box>
    </div>
  );
};

export default Cast;
