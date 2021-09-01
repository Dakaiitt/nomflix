import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1238a1927b88769a2e92566f1861a817",
    language: "en-US",
  },
});

const flagsApi = axios.create({
  baseURL: "https://www.countryflags.io/",
});

export const getFlagsApi = {
  flag: (country_code) => flagsApi.get(`${country_code}/flat/64.png`),
};

export const collectionApi = {
  collection: (collection_id) => api.get(`collection/${collection_id}`),
};

export const trendingApi = {
  trendingMovie: () => api.get("trending/movie/day"),
  trendingTVshow: () => api.get("trending/tv/day"),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: (page = 1) =>
    api.get("movie/popular", { params: { page, limit: 10 } }),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  popular: () => api.get("tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
