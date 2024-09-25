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

    <div
      v-if="$store.state.prenotazioni.length > 0"
      class="prenotazioni-container"
    >
      <h3>Prenotazioni:</h3>
      <ul>
        <li
          v-for="(prenotazione, index) in $store.state.prenotazioni"
          :key="index"
        >
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
      const prenotazione = {
        nomeCognome: this.nomeCognome,
        email: this.email,
        azienda: this.azienda || "N/A",
        numeroPartecipanti: this.numeroPartecipanti,
      };

      this.$store.commit("AGGIUNGI_PRENOTAZIONE", prenotazione); // Usa il commit di Vuex per aggiungere la prenotazione

      // Resetta il form dopo l'invio
      this.nomeCognome = "";
      this.email = "";
      this.azienda = "";
      this.numeroPartecipanti = 1;
    },
    eliminaPrenotazione(index) {
      this.$store.commit("ELIMINA_PRENOTAZIONE", index); // Usa il commit di Vuex per eliminare la prenotazione
    },
  },
};
</script>

<style scoped>
.form-container {
  justify-content: center;
  align-items: center;
}
.alert {
  color: red;
}
.prenotazioni-container {
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 800px;
}
.prenotazioni-container ul {
  list-style-type: none;
  padding: 0;
}
.prenotazioni-container li {
  margin-bottom: 10px;
}
.prenotazioni-container button {
  background-color: #004e59;
  color: white;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  margin-top: 30px;
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
  background-color: #f7f7f7;
  padding: 50px;
}

button {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  border-color: #004e59;
  background-color: #004e59;
  margin-left: 20px;
  font-size: 20px;
  border-radius: 8px;
}
</style>
