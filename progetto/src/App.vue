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
  text-align: center;
  display: flex;
}
</style>
