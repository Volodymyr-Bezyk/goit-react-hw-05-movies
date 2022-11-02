import MovieItem from 'components/MovieItem/MovieItem';
import TemplateGallery from 'templates/Template Gallery';

import { List, ListItem } from './MovieGallery.styled';

const MovieGallery = ({ movies, homePage, loader }) => {
  return (
    <>
      {movies.length > 0 && (
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <MovieItem filmInfo={movie} homePage={homePage}></MovieItem>
            </ListItem>
          ))}
        </List>
      )}
      {loader && <TemplateGallery />}
    </>
  );
};

export default MovieGallery;
