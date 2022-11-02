import { CardLink, Img, Title } from './MoovieItem.styled';

const MoovieItem = ({ filmInfo: { id, backdrop_path, title } }) => {
  return (
    <CardLink to={`movies/${id}`}>
      <div>
        <Img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
        ></Img>
        <Title>{title}</Title>
      </div>
    </CardLink>
  );
};
export default MoovieItem;

// document.readyState === 'complete'
