import PropTypes from 'prop-types';
import { MovieList, MovieListItem } from './MovieGalleryOnMoviesPage.styled';
import MovieGalleryItemOnMoviesPage from 'components/MovieGalleryItemOnMoviesPage';

const MovieGalleryOnMoviesPage = ({ movies }) => {
  return (
    <>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(movie => (
            <MovieListItem key={movie.id}>
              <MovieGalleryItemOnMoviesPage movie={movie} />
            </MovieListItem>
          ))}
        </MovieList>
      )}
    </>
  );
};

MovieGalleryOnMoviesPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieGalleryOnMoviesPage;
