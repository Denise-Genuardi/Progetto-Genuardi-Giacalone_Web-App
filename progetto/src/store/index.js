import { createStore } from "vuex";

export default createStore({
  state: {
    prenotazioni: [], // Array delle prenotazioni inizialmente vuoto
  },
  getters: {
    prenotazioni: (state) => state.prenotazioni, // Ritorna le prenotazioni dallo stato
  },
  mutations: {
    AGGIUNGI_PRENOTAZIONE(state, prenotazione) {
      state.prenotazioni.push(prenotazione); // Aggiunge una prenotazione allo stato
    },
    ELIMINA_PRENOTAZIONE(state, index) {
      state.prenotazioni.splice(index, 1); // Elimina una prenotazione dallo stato
    },
    RESET_PRENOTAZIONI(state) {
      state.prenotazioni = []; // Resetta tutte le prenotazioni
    },
  },
  actions: {
    aggiungiPrenotazione({ commit }, prenotazione) {
      commit("AGGIUNGI_PRENOTAZIONE", prenotazione); // Chiama la mutazione per aggiungere la prenotazione
    },
    eliminaPrenotazione({ commit }, index) {
      commit("ELIMINA_PRENOTAZIONE", index); // Chiama la mutazione per eliminare la prenotazione
    },
    resetPrenotazioni({ commit }) {
      commit("RESET_PRENOTAZIONI"); // Chiama la mutazione per resettare le prenotazioni
    },
  },
  modules: {},
});
