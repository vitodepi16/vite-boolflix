import { reactive } from "vue";

export const store = reactive({
  baseUrl: "https://api.themoviedb.org/3/",
  baseUrlImg: "https://image.tmdb.org/t/p/w185/",
  endPoint: "&query=a",
  cardFilms: [],
  cardTv: [],
  api_key: "?api_key=32225bed4d5d7ac9131f6079d4254b76",
  searchKey: "search/movie",
  searchTv: "search/tv",
  params: {
    query: "",
    api_key: "32225bed4d5d7ac9131f6079d4254b76",
    title: "",
    poster_path: "",
    original_title: "",
    original_language: "",
    release_date: "",
    popularity: "",
    vote_average: "",
  },
});
