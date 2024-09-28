<template>
  <div class="call-to-action-section">
    <h2 class="text-center">Perché partecipare?</h2>
    <p class="text-center">
      Questo webinar è pensato per professionisti del marketing, imprenditori e
      chiunque sia interessato a potenziare le proprie competenze
      nell'automazione del marketing. Se vuoi ottenere il massimo dalle tue
      campagne digitali, migliorare il tasso di conversione e fidelizzare i tuoi
      clienti, questo evento fa per te.
    </p>
    <div class="text-center">
      <router-link to="/prenotazione">
        <button class="btn btn-primary" aria-label="Iscriviti al webinar">
          Iscriviti
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EndAboutComponent",
};
</script>

<style scoped>
.call-to-action-section {
  background-color: #f7f7f7;
  padding: 40px 20px;
  margin-top: 40px;
}

.text-center {
  text-align: center;
}

.btn {
  margin-top: 20px;
  font-size: 16px;
  padding: 10px 20px;
}

@media (max-width: 768px) {
  .call-to-action-section {
    padding: 20px 10px;
  }

  .btn {
    font-size: 14px;
    padding: 8px 16px;
  }
}
</style>
