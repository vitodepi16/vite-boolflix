<template>
  <main>
    <div class="row">
      <CardComponent
        v-for="card in store.cardFilm"
        :key="card.id"
        :card="card"
      />
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #141414;
}
</style>
