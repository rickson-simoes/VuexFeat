import { createStore } from 'vuex';

export default createStore({
  state: {
    user: 'Rickson Simões',
    events: []
  },
  mutations: {
    ADD_EVENT({ events }, payload) {
      events.push(payload);
    }
  },
  actions: {},
  modules: {}
});
