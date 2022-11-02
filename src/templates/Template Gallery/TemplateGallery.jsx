import movieListtemplate from 'templates/movieListTemplate';
import { List, ListItem } from './TemplateGallery.styled';

const TemplateGallery = () => {
  return (
    <List>
      {movieListtemplate.map(t => (
        <ListItem key={t.id}>{t.content}</ListItem>
      ))}
    </List>
  );
};

export default TemplateGallery;
