<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-3 mt-2">
    <div class="card">
      <div class="card-head"></div>
      <div class="card-body">
        <!-- <img :src="card.poster_path" alt="" /> -->
        <p>{{ card.title }}</p>
        <p>{{ card.original_title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["card"],
};
</script>

<style lang="scss" scoped></style>
