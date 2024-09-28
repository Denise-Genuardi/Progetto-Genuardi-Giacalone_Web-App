import { createStore } from "vuex";

export default createStore({
  state: {
    prenotazioni: [],
  },
  getters: {
    prenotazioni: (state) => state.prenotazioni,
  },
  mutations: {
    add(state, prenotazione) {
      state.prenotazioni.push(prenotazione);
    },
    delete(state, index) {
      state.prenotazioni.splice(index, 1);
    },
  },
  actions: {
    aggiungiPrenotazione({ commit }, prenotazione) {
      commit("add", prenotazione);
    },
    eliminaPrenotazione({ commit }, index) {
      commit("delete", index);
    },
  },
  modules: {},
});
