import MovieItem from 'components/MovieItem/MovieItem';

import { List, ListItem } from './MovieGallery.styled';

const MovieGallery = ({ movies, template }) => {
  return (
    <List>
      {movies.length > 0
        ? movies.map(movie => (
            <ListItem key={movie.id}>
              <MovieItem filmInfo={movie}></MovieItem>
            </ListItem>
          ))
        : template.map(t => <ListItem key={t.id}>{t.content}</ListItem>)}
    </List>
  );
};

export default MovieGallery;
