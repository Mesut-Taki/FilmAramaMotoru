import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const requestToken = () => {
  return axios.get(`${API_URL}authentication/token/new?api_key=${API_KEY}`);
};
const login = (credentials) => {
  return axios.post(
    `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`,
    credentials
  );
};
const discovertv = (movieId) => {
  return axios.get(
    `${API_URL}/aile/${movieId}/account_states?api_key=${API_KEY}`
  );
};

const getTrendMovies = () => {
  return axios.get(`${API_URL}trending/all/day?api_key=${API_KEY}`);
};
const getPopulerMovies = () => {
  return axios.get(
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};
const getSimilarMovies = () => {
  return axios.get(
    `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
};

const searchMovies = (query) => {
  return axios.get(`${API_URL}search/movie?api_key=${API_KEY}&query=${query}`);
};
const getNowPlayingMovies = () => {
  return axios.get(
    `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
  );
};

const getMovieDetail = (movieId) => {
  return axios.get(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);
};

export {
  getNowPlayingMovies,
  requestToken,
  getPopulerMovies,
  login,
  getTrendMovies,
  searchMovies,
  getMovieDetail,
  discovertv,
  getSimilarMovies,
};
