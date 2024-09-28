<template>
  <div class="about-view">
    <AboutComponent />
    <ProgramComponent />
    <EndAboutComponent />
  </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";
import ProgramComponent from "@/components/ProgramComponent.vue";
import EndAboutComponent from "@/components/EndAboutComponent.vue";

export default {
  name: "AboutView",
  components: {
    AboutComponent,
    ProgramComponent,
    EndAboutComponent,
  },
};
</script>

<style scoped>
.about-view {
  padding: 20px;
}
</style>
