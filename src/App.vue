<template>
  <HeaderComponent @Search="getAll()" />
  <MainComponent />
</template>

<script>
import axios from "axios";
import { store } from "../data/store.js";
import HeaderComponent from "./components/HeaderComponent.vue.vue";

import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getFilm() {
      let url = store.baseUrl + store.searchKey;

      let searched = {};
      let params = {};
      if (store.params.query === "") {
        url =
          "https://api.themoviedb.org/3/trending/all/week?api_key=32225bed4d5d7ac9131f6079d4254b76";
      }
      for (let key in store.params) {
        if (store.params[key]) {
          params[key] = store.params[key];
        }
        if (Object.keys(params).length > 0) {
          searched.params = params;
        }
      }

      axios.get(url, searched).then((res) => {
        store.cardFilms = res.data.results;
      });
    },
    getSeries() {
      let url = store.baseUrl + store.searchTv;
      if (store.params.query === "") {
        url =
          "https://api.themoviedb.org/3/tv/top_rated?api_key=32225bed4d5d7ac9131f6079d4254b76&language=en-US&page=1";
      }
      let searched = {};
      let params = {};
      for (let key in store.params) {
        if (store.params[key]) {
          params[key] = store.params[key];
        }
        if (Object.keys(params).length > 0) {
          searched.params = params;
        }
      }
      axios.get(url, searched).then((res) => {
        store.cardTv = res.data.results;
      });
    },
    getAll() {
      this.getFilm(), this.getSeries();
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #141414;
}
</style>
