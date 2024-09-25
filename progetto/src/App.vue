<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <HeaderBar />
        <FooterBar />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>

<style>
#app {
  font-family: IBM Plex Sans JP;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container-fluid {
  width: 100%;
}
</style>
