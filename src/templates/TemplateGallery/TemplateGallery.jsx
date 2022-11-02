import MyLoader from 'components/Loader/Loader';
import movieListtemplate from 'templates/movieListTemplate';
import { List, ListItem } from './TemplateGallery.styled';

const TemplateGallery = () => {
  return (
    <List>
      {movieListtemplate.map(t => (
        <ListItem key={t.id}>
          <MyLoader />
        </ListItem>
      ))}
    </List>
  );
};

export default TemplateGallery;
