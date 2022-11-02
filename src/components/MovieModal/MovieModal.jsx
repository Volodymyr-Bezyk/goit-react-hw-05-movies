import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmById } from 'helpers/fetchMovies';
import Box from 'components/Box';
import {
  Modal,
  ModalImg,
  TextWrap,
  FilmTitle,
  SubTitle,
  Text,
  Genre,
  AddLink,
} from './MovieModal.styled';

const MovieModal = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getInfoAboutFilm() {
      try {
        const result = await getFilmById(movieId, controller);
        setFilm(result);
      } catch {
        return;
      }
    }
    getInfoAboutFilm();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!film) return;

  const {
    poster_path: poster,
    title,
    overview,
    genres,
    release_date: release,
    runtime,
  } = film;

  return (
    <Box display="flex" justifyContent="center">
      <Modal>
        <Box display="flex">
          <ModalImg
            src={`https://image.tmdb.org/t/p/w400/${poster}`}
            alt={title}
          />

          <TextWrap>
            <FilmTitle>{title}</FilmTitle>
            <Text>Release date: {release}</Text>
            <Text>Runtime: {runtime} mins</Text>

            <SubTitle>Overview</SubTitle>
            <Text>{overview}</Text>
            <SubTitle>Genres:</SubTitle>
            <ul>
              {genres.map(({ name }, idx) => (
                <Genre key={idx}> {name}</Genre>
              ))}
            </ul>
            <SubTitle>Additional information</SubTitle>
            <div>
              <AddLink to="cast">Cast</AddLink>
              <AddLink to="reviews">Reviews</AddLink>
            </div>
          </TextWrap>
        </Box>

        <div>
          <Outlet></Outlet>
        </div>
      </Modal>
    </Box>
  );
};

export default MovieModal;
