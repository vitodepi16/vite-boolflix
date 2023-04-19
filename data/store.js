import { reactive } from "vue";

export const store = reactive({
  baseUrl: "https://api.themoviedb.org/3/",
  endPoint: "",
  autKey: "?api_key=32225bed4d5d7ac9131f6079d4254b76",
  searchKey: "search/movie",
  cardFilm: {
    title: "",
    original_title: "",
    original_language: "",
    vote_avarage: "",
  },
});