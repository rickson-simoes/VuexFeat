import { createStore } from 'vuex';
import user from './modules/user';
import event from './modules/event';

export default createStore({
  modules: {
    user,
    event
  }
});
