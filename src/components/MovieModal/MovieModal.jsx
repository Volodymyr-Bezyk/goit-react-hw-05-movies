import { Outlet, useParams } from 'react-router-dom';
import {
  Backdrop,
  BackBtn,
  BtnText,
  Modal,
  ModalImg,
  TextWrap,
  FilmTitle,
  SubTitle,
  Text,
  Genre,
  AddLink,
} from './MovieModal.styled';
import { BiArrowBack } from 'react-icons/bi';
import { getFilmById } from 'helpers/fetchMovies';
import { useEffect } from 'react';
import { useState } from 'react';

const MovieModal = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState('');

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
  console.log(film);

  const {
    poster_path: poster,
    title,
    overview,
    genres,
    release_date: release,
    runtime,
  } = film;

  return (
    <Backdrop>
      <BackBtn type="button">
        <BiArrowBack size={20} strokeWidth={1} display="block"></BiArrowBack>{' '}
        <BtnText>Go back</BtnText>
      </BackBtn>
      <Modal>
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

          <Outlet></Outlet>
        </TextWrap>
      </Modal>
    </Backdrop>
  );
};

export default MovieModal;
