<template>
  <main>
    <div class="container">
      <section>
        <h2 class="movie">Movie</h2>
        <div class="row">
          <CardComponent
            v-for="card in store.cardFilms"
            :key="card.id"
            :card="card"
          />
        </div>
      </section>
      <section class="series">
        <h2>Serie Tv</h2>
        <div class="row">
          <CardComponent
            v-for="card in store.cardTv"
            :key="card.id"
            :card="card"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { store } from "../../data/store";

import CardComponent from "./CardComponent.vue";

export default {
  name: "MainComponent",
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  .row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  background-color: #141414;
  h2 {
    color: #c8c8c8;
    padding-top: 2rem;
  }
}
</style>
