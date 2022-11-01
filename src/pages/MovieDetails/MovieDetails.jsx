import { BiArrowBack } from 'react-icons/bi';
import { Backdrop, BackBtn, BtnText } from './MovieDetails.styled';

const MovieDetails = ({ children }) => {
  return (
    <Backdrop>
      <BackBtn type="button">
        <BiArrowBack size={20} strokeWidth={1} display="block"></BiArrowBack>{' '}
        <BtnText>Go back</BtnText>
      </BackBtn>
      {children}
    </Backdrop>
  );
};

export default MovieDetails;
