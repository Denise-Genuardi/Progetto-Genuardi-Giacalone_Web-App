<template>
  <div class="form-container">
    <form @submit.prevent="submitForm" class="align-items-center">
      <div class="mb-3 d-flex">
        <label for="nome" class="me-5 label-form">Nome e Cognome*</label>
        <input
          type="text"
          v-model="nomeCognome"
          id="nome"
          class="form-control w-auto"
          required
        />
      </div>

      <div class="mb-3 d-flex">
        <label for="email" class="me-5">Email*</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="form-control w-auto"
          required
        />
      </div>

      <div class="mb-3 d-flex">
        <label for="azienda" class="me-5">Azienda</label>
        <input
          type="text"
          v-model="azienda"
          id="azienda"
          class="form-control w-auto"
        />
      </div>

      <div class="mb-2 d-flex">
        <label for="partecipanti" class="me-5">Numero Partecipanti*</label>
        <div class="d-flex">
          <button type="button" @click="decrementaPartecipanti" class="meno">
            -
          </button>
          <input
            type="text"
            v-model="numeroPartecipanti"
            id="partecipanti"
            class="form-control w-auto"
          />
          <button type="button" @click="incrementaPartecipanti" class="piu">
            +
          </button>
        </div>
      </div>

      <!-- Messaggio di errore -->
      <div v-if="isAlertVisible" class="alert">
        Non è possibile prenotare meno di 1 posto o più di 10 posti
      </div>

      <div>
        <button type="submit" class="invio">Invia</button>
      </div>
    </form>

    <div v-if="prenotazioni.length > 0" class="prenotazioni-container">
      <h3>Prenotazioni:</h3>
      <ul>
        <li v-for="(prenotazione, index) in prenotazioni" :key="index">
          <div>
            <strong>Nome e Cognome:</strong> {{ prenotazione.nomeCognome }}
            <br />
            <strong>Email:</strong> {{ prenotazione.email }} <br />
            <strong>Azienda:</strong> {{ prenotazione.azienda }} <br />
            <strong>Numero Partecipanti:</strong>
            {{ prenotazione.numeroPartecipanti }}
          </div>
          <button @click="eliminaPrenotazione(index)">Elimina</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      nomeCognome: "",
      email: "",
      azienda: "",
      numeroPartecipanti: 1,
      prenotazioni: [],
    };
  },
  computed: {
    isAlertVisible() {
      return this.numeroPartecipanti < 1 || this.numeroPartecipanti > 10;
    },
  },
  methods: {
    incrementaPartecipanti() {
      if (this.numeroPartecipanti < 10) {
        this.numeroPartecipanti++;
      }
    },
    decrementaPartecipanti() {
      if (this.numeroPartecipanti > 0) {
        this.numeroPartecipanti--;
      }
    },
    submitForm() {
      this.prenotazioni.push({
        nomeCognome: this.nomeCognome,
        email: this.email,
        azienda: this.azienda || "N/A",
        numeroPartecipanti: this.numeroPartecipanti,
      });

      // Resetta il form dopo l'invio
      this.nomeCognome = "";
      this.email = "";
      this.azienda = "";
      this.numeroPartecipanti = 1; // Riporta a 1 per evitare problemi
    },
    eliminaPrenotazione(index) {
      this.prenotazioni.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.alert {
  color: red;
}
.prenotazioni-container {
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}
.prenotazioni-container ul {
  list-style-type: none;
  padding: 0;
}
.prenotazioni-container li {
  margin-bottom: 10px;
}
.prenotazioni-container button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
.meno,
.piu {
  background-color: #004e59;
  color: white;
  border-radius: 20px;
}
.invio {
  font-family: IBM Plex Sans JP;
  color: white;
  border-color: #004e59;
  padding: 10px 30px;
  background-color: #004e59;
  margin-left: 20px;
  margin-top: 50px;
  border-radius: 8px;
}
.form-container {
  background-color: lightgrey;
  padding: 50px;
}
</style>
