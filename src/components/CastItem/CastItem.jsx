import { ActorImg, Text, TextBold } from './CastItem.styled';
import defaultImage from '../../templates/notAvailible.png';
import Box from 'components/Box';

const CastItem = ({ actor }) => {
  const { profile_path, character, name } = actor;

  return (
    <div>
      <ActorImg
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : defaultImage
        }
        alt={name}
      />
      <Box width="200px">
        <TextBold>Name: {name}</TextBold>
        <Text>Character:</Text>
        <TextBold> {character}</TextBold>
      </Box>
    </div>
  );
};

export default CastItem;
