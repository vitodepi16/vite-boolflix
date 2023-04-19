<template>
  <div class="col-12">
    <div class="card">
      <div class="card-head"></div>
      <div class="card-body">
        <p>{{ film.title }}</p>
        <p>{{ film.original_title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["film"],
};
</script>

<style lang="scss" scoped></style>
