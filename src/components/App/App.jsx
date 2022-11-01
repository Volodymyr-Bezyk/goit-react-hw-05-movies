import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import SharedLayout from '../SharedLayout';
import MovieModal from 'components/MovieModal';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<div>Search movies</div>}></Route>
          <Route
            path="movies/:movieId"
            element={
              <MovieDetails>
                <MovieModal />
              </MovieDetails>
            }
          >
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<div>Review</div>}></Route>
          </Route>
          <Route path="*" element={<div>Page not found</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
