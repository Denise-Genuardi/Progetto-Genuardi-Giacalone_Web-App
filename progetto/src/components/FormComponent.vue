<template>
  <div class="form-container container">
    <form @submit.prevent="submitForm" class="row g-3">
      <div class="col-12 mb-3 row">
        <label for="nome" class="col-sm-3 col-form-label text-sm-end">
          Nome e Cognome*
        </label>
        <div class="col-sm-9">
          <input
            type="text"
            v-model="nomeCognome"
            id="nome"
            class="form-control"
            required
            placeholder="Inserisci il tuo nome e cognome"
          />
        </div>
      </div>

      <div class="col-12 mb-3 row">
        <label for="email" class="col-sm-3 col-form-label text-sm-end">
          Email*
        </label>
        <div class="col-sm-9">
          <input
            type="email"
            v-model="email"
            id="email"
            class="form-control"
            required
            placeholder="Inserisci la tua email"
          />
        </div>
      </div>

      <div class="col-12 mb-3 row">
        <label for="azienda" class="col-sm-3 col-form-label text-sm-end">
          Azienda
        </label>
        <div class="col-sm-9">
          <input
            type="text"
            v-model="azienda"
            id="azienda"
            class="form-control"
            placeholder="Inserisci il nome dell'azienda"
          />
        </div>
      </div>

      <div class="col-12 mb-3 row align-items-center">
        <label for="partecipanti" class="col-sm-3 col-form-label text-sm-end">
          Numero Partecipanti*
        </label>
        <div class="col-sm-9">
          <div class="input-group">
            <button
              type="button"
              @click="decrementaPartecipanti"
              class="btn btn-outline-secondary"
            >
              -
            </button>
            <input
              type="number"
              v-model.number="numeroPartecipanti"
              @input="verificaPartecipanti"
              id="partecipanti"
              class="form-control text-center"
            />
            <button
              type="button"
              @click="incrementaPartecipanti"
              class="btn btn-outline-secondary"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div v-if="isAlertVisible" class="col-12 alert alert-danger">
        Non è possibile prenotare meno di 1 posto o più di 10 posti
      </div>

      <div class="col-12 text-center">
        <button type="submit" class="btn invio">Invia</button>
      </div>
    </form>

    <div
      v-if="$store.state.prenotazioni.length > 0"
      class="prenotazioni-container container mt-4"
    >
      <h3 class="mb-3">Prenotazioni:</h3>
      <ul class="list-group">
        <li
          v-for="(prenotazione, index) in $store.state.prenotazioni"
          :key="index"
          class="list-group-item"
        >
          <div>
            <strong>Nome e Cognome:</strong> {{ prenotazione.nomeCognome
            }}<br />
            <strong>Email:</strong> {{ prenotazione.email }}<br />
            <strong>Azienda:</strong> {{ prenotazione.azienda }}<br />
            <strong>Numero Partecipanti:</strong>
            {{ prenotazione.numeroPartecipanti }}
          </div>
          <button
            @click="eliminaPrenotazione(index)"
            class="btn btn-danger btn-sm mt-2"
          >
            Elimina
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
      if (this.numeroPartecipanti > 1) {
        this.numeroPartecipanti--;
      }
    },
    verificaPartecipanti() {
      if (this.numeroPartecipanti < 1) {
        this.numeroPartecipanti = 1;
      } else if (this.numeroPartecipanti > 10) {
        this.numeroPartecipanti = 10;
      }
    },
    submitForm() {
      if (this.isAlertVisible) return;

      const prenotazione = {
        nomeCognome: this.nomeCognome,
        email: this.email,
        azienda: this.azienda || "N/A",
        numeroPartecipanti: this.numeroPartecipanti,
      };

      this.$store.commit("AGGIUNGI_PRENOTAZIONE", prenotazione);

      this.nomeCognome = "";
      this.email = "";
      this.azienda = "";
      this.numeroPartecipanti = 1;
    },
    eliminaPrenotazione(index) {
      this.$store.commit("ELIMINA_PRENOTAZIONE", index);
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 8px;
  max-width: 900px;
  margin: 0 auto;
}

.invio {
  color: white;
  border-color: #004e59;
  padding: 10px 30px;
  background-color: #004e59;
  border-radius: 8px;
}

.prenotazioni-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.input-group .form-control {
  max-width: 60px;
}

.input-group .btn {
  width: 40px;
}

@media (max-width: 768px) {
  .form-container {
    padding: 20px;
  }

  .input-group .form-control {
    max-width: 50px;
  }

  .input-group .btn {
    width: 35px;
  }
}
</style>
