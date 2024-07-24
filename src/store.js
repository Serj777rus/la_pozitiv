import { createStore } from 'vuex';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return {};
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export default createStore({
  state: loadState(),
  mutations: {
    setCard(state, card) {
      state.card = card;
      saveState(state); // Сохраняем состояние при изменении
    },
    clearCard(state) {
      state.card = null;
      saveState(state); // Сохраняем состояние при очистке
    }
  },
  actions: {
    updateCard({ commit }, card) {
      commit('setCard', card);
    },
    clearCard({ commit }) {
      commit('clearCard');
    }
  },
  getters: {
    getCard(state) {
      return state.card;
    }
  }
});