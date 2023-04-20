<template>
  <header class="d-flex justify-content-between align-items-center">
    <div class="logo ms-5">
      <img src="../../public/img/netflixlogo.png" alt="" />
    </div>
    <div class="search-zone me-5">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Cerca il tuo film"
        class="rounded-2 p-1"
        @input="search"
        v-model.trim="store.params.query"
      />
      <button class="btn btn-danger mx-2" @click="search">Search</button>
    </div>
  </header>
</template>

<script>
import { store } from "../../data/store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      this.$emit("search");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/generals.scss" as *;
.navbar {
  position: fixed;
}
header {
  background-color: black;
  .logo {
    width: 80px;
  }
  img {
    width: 100%;
  }
}
</style>
