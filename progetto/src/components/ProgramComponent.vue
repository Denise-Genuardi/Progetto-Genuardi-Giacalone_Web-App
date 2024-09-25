<template>
  <div class="program-section" style="background-color: #f7f7f7; padding: 20px">
    <h2 class="text-center">Programma</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="width: 33%">Orario</th>
          <th scope="col">Descrizione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15:30 - 16:00</td>
          <td>Presentazione del webinar e panoramica dei temi trattati.</td>
        </tr>
        <tr>
          <td>16:00 - 16:30</td>
          <td>Automazione delle Campagne con Francesca Bianchi</td>
        </tr>
        <tr>
          <td>16:30 - 17:00</td>
          <td>Dati per Aumentare il ROI con Luca Rossi</td>
        </tr>
        <tr>
          <td>17:00:00 - 17:30</td>
          <td>Automazione e Personalizzazione con Elisa Morett</td>
        </tr>
        <tr>
          <td>17:30 - 18:00</td>
          <td>Sessione Q&A</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProgramComponent", // Nome del componente
};
</script>

<style scoped>
.program-section {
  margin-top: 20px; /* Margine superiore per distanziare dalla sezione sopra */
}

.text-center {
  text-align: center; /* Allinea il titolo al centro */
  margin-bottom: 15px; /* Spazio sotto il titolo */
}
</style>
