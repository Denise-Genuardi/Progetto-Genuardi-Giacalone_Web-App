<template>
  <div class="about-view">
    <!-- Usa il componente AboutComponent -->
    <AboutComponent
      subtitle="WEBINAR"
      title="Strategie di Marketing Automation: Massimizza il Tuo Potenziale"
    />
    <ProgramComponent />
  </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";
import ProgramComponent from "../components/ProgramComponent.vue";

export default {
  name: "AboutView",
  components: {
    AboutComponent,
    ProgramComponent,
  },
};
</script>

<style scoped>
.about-view {
  padding: 20px;
}
</style>
