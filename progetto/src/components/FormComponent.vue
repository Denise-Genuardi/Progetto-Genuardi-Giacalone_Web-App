<template>
  <h3
    class="webinar-subtitle"
    :style="{ color: headingColor }"
    id="webinar-title"
  >
    ISCRIVITI AL WEBINAR
  </h3>
  <TitleComponent titleText="Strategie di Marketing Automation con Reply" />
  <div
    class="form-container container"
    role="form"
    aria-labelledby="webinar-title"
  >
    <form @submit.prevent="submitForm" class="row g-3" aria-required="true">
      <!-- Form fields -->
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
            aria-required="true"
            placeholder="Inserisci il tuo nome e cognome"
            aria-label="Nome e Cognome"
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
            aria-required="true"
            placeholder="Inserisci la tua email"
            aria-label="Email"
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
            aria-label="Azienda"
          />
        </div>
      </div>

      <!-- Partecipanti -->
      <div class="col-12 mb-3 row align-items-center">
        <label for="partecipanti" class="col-sm-3 col-form-label text-sm-end">
          Numero Partecipanti*
        </label>
        <div class="col-sm-9">
          <div
            class="input-group d-flex justify-content-center justify-content-sm-start"
          >
            <button
              v-on:click="decrementaPartecipanti"
              type="button"
              class="btn btn-secondary increment-decrement"
              :disabled="numeroPartecipanti <= 1"
              aria-label="Decrementa il numero di partecipanti"
            >
              -
            </button>
            <span class="input-group-text text-center" style="width: 60px">
              {{ numeroPartecipanti }}
            </span>
            <button
              v-on:click="incrementaPartecipanti"
              type="button"
              class="btn btn-secondary increment-decrement"
              :disabled="numeroPartecipanti >= 10"
              aria-label="Incrementa il numero di partecipanti"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="col-12 text-center">
        <button
          v-if="isFormValid"
          type="submit"
          class="btn invio btn-white"
          aria-label="Invia il modulo"
        >
          Invia
        </button>
        <button
          v-else
          type="button"
          class="btn invio btn-disabled"
          disabled
          aria-label="Invio disabilitato"
        >
          Invia
        </button>
      </div>
    </form>
  </div>

  <!-- Prenotazioni -->
  <div
    v-if="$store.state.prenotazioni.length > 0"
    class="prenotazioni-container container mt-4"
  >
    <h3 class="mb-3" style="color: white" id="prenotazioni-title">
      Prenotazioni:
    </h3>
    <div class="row">
      <div
        v-for="(prenotazione, index) in $store.state.prenotazioni"
        :key="index"
        class="col-md-6 col-sm-12 mb-4"
      >
        <div
          class="card w-100"
          role="alert"
          aria-labelledby="prenotazioni-title"
        >
          <div class="card-body">
            <h5 class="card-title">
              Grazie {{ prenotazione.nomeCognome }} per la tua prenotazione!
            </h5>
            <p class="card-text">
              <strong>Nome e Cognome:</strong> {{ prenotazione.nomeCognome
              }}<br />
              <strong>Email:</strong> {{ prenotazione.email }}<br />
              <strong>Azienda:</strong> {{ prenotazione.azienda }}<br />
              <strong>Numero Partecipanti:</strong>
              {{ prenotazione.numeroPartecipanti }}
            </p>
            <button
              v-on:click="eliminaPrenotazione(index)"
              class="btn btn-danger"
              aria-label="Elimina la prenotazione"
            >
              Elimina
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Pop-up -->
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup-content">
      <h3>Conferma eliminazione</h3>
      <p>Sei sicuro di voler cancellare la prenotazione?</p>
      <div class="popup-buttons">
        <button @click="confermaEliminazione" class="btn btn-danger">
          Elimina
        </button>
        <button @click="annullaEliminazione" class="btn btn-secondary">
          Annulla
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  components: {
    TitleComponent,
  },
  data() {
    return {
      nomeCognome: "",
      email: "",
      azienda: "",
      numeroPartecipanti: 1,
      headingColor: "#004e59",
      showPopup: false,
      indexToDelete: null,
    };
  },
  computed: {
    isFormValid() {
      return this.nomeCognome && this.email;
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
    submitForm() {
      if (!this.isFormValid) return;

      const prenotazione = {
        nomeCognome: this.nomeCognome,
        email: this.email,
        azienda: this.azienda || "N/A",
        numeroPartecipanti: this.numeroPartecipanti,
      };

      this.$store.commit("add", prenotazione);

      this.nomeCognome = "";
      this.email = "";
      this.azienda = "";
      this.numeroPartecipanti = 1;
    },
    eliminaPrenotazione(index) {
      this.indexToDelete = index;
      this.showPopup = true;
    },
    confermaEliminazione() {
      if (this.indexToDelete !== null) {
        this.$store.commit("delete", this.indexToDelete);
        this.indexToDelete = null;
      }
      this.showPopup = false;
    },
    annullaEliminazione() {
      this.indexToDelete = null;
      this.showPopup = false;
    },
  },
};
</script>
<style scoped>
.form-container {
  background-color: #004e59;
  padding-top: 50px;
  padding-bottom: 30px;
  margin-left: 50px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  color: white;
  max-width: 1000px;
}

.invio {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #004e59;
  border-color: #004e59;
  background-color: white;
  margin-left: 20px;
  font-size: 20px;
  border-radius: 8px;
}

.invio:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.btn-disabled {
  background-color: gray !important;
  border-color: gray !important;
}

.card {
  border-radius: 8px;
  border: 1px solid grey;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 50px;
  max-width: 600px;
}

.card-body {
  color: black;
}

.increment-decrement {
  border-radius: 0 !important;
  background-color: white;
  color: #004e59;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
