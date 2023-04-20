<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2">
    <div class="card text-center bg-black">
      <div class="card-head">
        <img class="img-card-top" :src="url" :alt="card.title" />
      </div>
      <div class="card-body">
        <p>Titolo: {{ card.title }} {{ card.name }}</p>
        <p>Data di rilascio: {{ card.release_date }}</p>
        <p>
          Lingua:
          <span :class="'fi fi-' + card.original_language + ' fis'"></span>
        </p>
        <p>Popolarità: {{ card.popularity }} views</p>
        <p>Vote: {{ card.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../data/store";
import "flag-icons/css/flag-icons.min.css";
export default {
  name: "CardComponent",
  props: ["card"],
  data() {
    return {
      store,
      baseUrl: store.baseUrlImg,
      url: "",
    };
  },
  mounted() {
    this.url = `${this.baseUrl}${this.card.poster_path}  `;
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
}
.card-body {
  color: #c8c8c8;
}
</style>
