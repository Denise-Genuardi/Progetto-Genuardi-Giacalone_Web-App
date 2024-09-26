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
  flex-direction: column; /* Allinea gli elementi verticalmente */
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra orizzontalmente */
}

.iscrizione-text {
  font-family: IBM Plex Sans JP;
  font-size: 20px;
  text-align: center; /* Centra il testo */
  margin-top: 0;
}

.title {
  font-family: IBM Plex Sans JP;
  font-size: 40px;
  color: black;
  text-align: center; /* Centra il testo */
  margin-bottom: 50px;
}
</style>
