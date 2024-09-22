<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container header">
    <div class="row">
      <div class="col">
        <img src="../assets/Logo_Reply.png" alt="logo" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-outline-secondary">
          <router-link to="/">Home</router-link>
        </button>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-outline-secondary">
          <router-link to="/about">About</router-link>
        </button>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-outline-secondary">
          <router-link to="/prenotazione">Prenota</router-link>
        </button>
      </div>

      <router-view />
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  name: "HeaderBar",
};
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
.header {
  padding: 30px;
}
img {
  width: 30%;
  height: auto;
  float: left;
}
button {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
