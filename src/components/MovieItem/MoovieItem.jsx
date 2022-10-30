import { CardLink, Img, Title } from './MoovieItem.styled';

const MoovieItem = ({ filmInfo: { backdrop_path, title } }) => {
  return (
    <CardLink>
      <div>
        <Img
          src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
          alt={title}
        ></Img>
        <Title>{title}</Title>
      </div>
    </CardLink>
  );
};
export default MoovieItem;

// document.readyState === 'complete'
