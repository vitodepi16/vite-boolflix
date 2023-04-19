<template>
  <HeaderComponent />
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

      axios.get(url).then((res) => {
        store.cardFilm = res.data.results;
        console.log();
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
