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
          <td>09:00 - 10:00</td>
          <td>Introduzione al corso</td>
        </tr>
        <tr>
          <td>10:15 - 11:15</td>
          <td>Prima sessione di laboratorio</td>
        </tr>
        <tr>
          <td>11:30 - 12:30</td>
          <td>Discussione di gruppo</td>
        </tr>
        <tr>
          <td>13:00 - 14:00</td>
          <td>Pranzo</td>
        </tr>
        <tr>
          <td>14:15 - 15:15</td>
          <td>Presentazione finale</td>
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
