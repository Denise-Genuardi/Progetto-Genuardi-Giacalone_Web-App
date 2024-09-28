<template>
  <div class="prenotazione">
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: "App",
  components: {
    FormComponent,
  },
};
</script>

<style>
.prenotazione {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
