import { BiArrowBack } from 'react-icons/bi';
import { Backdrop, BackBtn, BtnText } from './MovieDetails.styled';
import { createPortal } from 'react-dom';

const MovieDetails = ({ children }) => {
  const modalRoot = document.getElementById('modal');

  return createPortal(
    <Backdrop>
      <BackBtn type="button">
        <BiArrowBack size={20} strokeWidth={1} display="block"></BiArrowBack>{' '}
        <BtnText>Go back</BtnText>
      </BackBtn>
      {children}
    </Backdrop>,
    modalRoot
  );
};

export default MovieDetails;
