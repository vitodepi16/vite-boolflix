<template>
  <header class="navbar d-flex justify-content-between align-items-center">
    <div class="left-nav d-flex">
      <div class="logo ms-5">
        <img src="../../public/img/netflixlogo.png" alt="" />
      </div>
      <div
        class="ms-4 nav d-flex justify-content-center align-items-center flex-wrap d-none d-md-flex"
      >
        <ul class="d-flex m-0 p-0 flex-wrap">
          <li v-for="item in nav" class="px-2">
            <a href="#" class="text-decoration-none">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-nav">
      <div class="search-zone me-5 d-flex">
        <input
          type="text"
          name="searchBar"
          placeholder="Cerca il tuo film"
          class="rounded-2 p-1"
          @input="search"
          v-model.trim="store.params.query"
        />
        <button class="btn btn-danger mx-2 d-none d-md-flex" @click="search">
          Search
        </button>
      </div>
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
      nav: ["Home", "Film", "Series", "Last add", "my List"],
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
  width: 100%;
  z-index: 1000;
  height: 80px;
}
header {
  background-color: black;
  .logo {
    width: 80px;
  }
  img {
    width: 100%;
  }
  .nav {
    ul {
      list-style: none;
    }
    a {
      color: #c8c8c8;
      &:hover {
        color: #e50815;
        border-bottom-color: 1px solid #e50815;
      }
    }
  }
}
</style>
