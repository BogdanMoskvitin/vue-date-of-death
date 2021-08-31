import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        year: ''
    },
    mutations: {
        CHANGE_YEAR: (state, qwerty) => {
            state.year = qwerty
        }
    },
    actions: {
        TOGGLE_YEAR({commit}, qwerty) {
            commit('CHANGE_YEAR', qwerty)
        }
    },
    getters: {
        STATE_YEAR(state) {
            return state.year;
        }
    }
});

export default store;