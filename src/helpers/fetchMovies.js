import axios from 'axios';

const API_KEY = '7254cc1ad31c69d2a534e79f9d285c60';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function fetchTrendingFilms(abort) {
  const filmsPath = `/3/trending/movie/day`;
  const films = await axios.get(filmsPath, {
    signal: abort.signal,
    params: { api_key: API_KEY },
  });
  return films.data.results;
}
