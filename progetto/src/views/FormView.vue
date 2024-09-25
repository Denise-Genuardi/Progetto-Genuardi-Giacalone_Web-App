<template>
  <div class="prenotazione">
    <h1 class="iscrizione-text"><b>ISCRIVITI AL WEBINAR</b></h1>
    <h1 class="title"><b>Strategie di Marketing Automation con Reply</b></h1>
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
  height: 100vh; /* Fa sì che l'altezza sia 100% della viewport */
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
