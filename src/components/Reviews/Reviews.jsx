import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'helpers/fetchMovies';
import { useState, useEffect } from 'react';
import { Title, AuthorName, Text } from './Reviews.styled';
import Box from 'components/Box';
import { dateFormatter } from 'helpers/dateFormatter';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    (async function getReviews() {
      try {
        const result = await getFilmReviews(movieId, controller);
        setReviews(result);
      } catch {
        return;
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <Title>Reviews</Title>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content, updated_at: date }) => (
            <li key={id}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <AuthorName>Author: {author}</AuthorName>
                <p>
                  <b>Added:</b> <i>{dateFormatter(date)}</i>
                </p>
              </Box>
              <Text>{content}</Text>
            </li>
          ))}
        </ul>
      ) : (
        <AuthorName>No reviews yet</AuthorName>
      )}
    </div>
  );
};

export default Reviews;
