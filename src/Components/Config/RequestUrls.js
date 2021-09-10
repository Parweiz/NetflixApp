const API_KEY = "b5cec7d8f2b7b7b32b1206268398193d";

const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventuresMovies: `discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimationMovies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeMovies: `discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
