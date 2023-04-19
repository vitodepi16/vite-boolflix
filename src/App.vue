<template>
  <HeaderComponent @Search="getFilm" />
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
      const url =
        store.baseUrl + store.searchKey + store.autKey + store.endPoint;
      let searched = {};
      let params = {};
      for (let key in store.cardFilm) {
        if (store.cardFilm[key]) {
          params[key] = store.cardFilm[key];
        }
        if (Object.keys(params).length > 0) {
          searched.params = params;
        }
      }
      axios.get(url, searched).then((res) => {
        store.cardFilm = res.data.results;
      });
    },
  },
  mounted() {
    store.endPoint = "&language=en-US&query=a&page=1&include_adult=false";
    this.getFilm();
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #141414;
}
</style>
