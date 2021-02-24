import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guesses: null,
    userChoice: '',
  },
  mutations: {
    updateGuesses(state, guesses){
      state.guesses = guesses;
    },
    updateUserChoice(state, choice) {
      localStorage.setItem('userChoice', choice);
      state.userChoice = choice;
    },
  },
  actions: {
    getGuesses({commit}) {
      axios.get('/api/guesses')
        .then(result => commit('updateGuesses', result.data))
        .catch(console.error);
    },
    addGuess({commit}, guess) {
      let choice = { value: guess };
      commit('updateUserChoice', guess);
      return axios.post('/api/guesses', choice)
        .catch(console.error);
    },
  }
})