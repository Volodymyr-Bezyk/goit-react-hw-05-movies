import { CardLink, Img, Title } from './MoovieItem.styled';
import notFound from '../notFound.png';

const MoovieItem = ({
  filmInfo: { id, backdrop_path, title, template },
  homePage,
}) => {
  return (
    <CardLink to={homePage ? `movies/${id}` : `${id}`}>
      <div>
        <Img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : notFound
          }
          alt={title}
        ></Img>
        <Title>{title}</Title>
      </div>
    </CardLink>
  );
};
export default MoovieItem;

// document.readyState === 'complete'
