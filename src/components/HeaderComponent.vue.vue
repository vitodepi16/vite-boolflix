<template>
  <header class="d-flex justify-content-between nav-bar">
    <div class="logo">
      <img src="../../public/img/netflixlogo.jpeg" alt="" />
    </div>
    <div>
      <div class="input-group">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" />
          <label class="form-label" for="form1"></label>
        </div>
      </div>
      <button class="btn btn-danger">Search</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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
