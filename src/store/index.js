import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events:[]
  },
  mutations: {
    getEvents(state, data) {
      state.events = data.data;
    },
    createEvent(state,newEvent){
      state.events.push (newEvent);
    }
  },
  actions: {
    async getEvents(context) {
      const data = await axios.get('http://localhost:3000/meetups') ;
      context.commit("getEvents", data);
    },
    async createEvent(context,newEvent) {
      this.state.loading = true;
      await  axios.post('http://localhost:3000/meetups',newEvent, { headers: {
        "Content-Type": "application/json"
      },
    });
      context.commit("createEvent", newEvent);
    }
  },
  modules: {
  }
})
