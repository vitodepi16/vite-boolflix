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
      const url = store.baseUrl + store.searchKey;
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
        store.cardFilms = res.data.results;
      });
    },
    getSeries() {
      const url = store.baseUrl + store.searchTv;
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
        store.cardFilms = res.data.results;
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
