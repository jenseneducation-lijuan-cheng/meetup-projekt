import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const apiUrl = "https://api.jsonbin.io/b/5f8b33637243cd7e82506b30"
const getUrl = `${apiUrl}/latest`
const secretKey = "$2b$10$3P9DCGUb3gZO19Ni0SwdTuK3m5hvWhs5eQ3NJNR9NLg1495y5ChaG"
const API = axios.create({ headers: { "secret-key": secretKey, versioning: true, "Content-Type": "application/json" }})

export default new Vuex.Store({
  state: {
    events: [],
    attendEvents: [],
    user: {},
    reviews:[]
  },
  mutations: {
    getEvents(state, data) {
      state.events = data.data.meetups;
    },
    createEvent(state, newEvent) {
      state.events.push(newEvent);
    },
    getReviews(state,data){
      state.reviews = data.data.reviews
    },
    saveUser(state, user) {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    getAttendEvents(state, events) {
      if (events) {
        state.attendEvents = events
      }
      
    },
    createReview(state,newReview){
      state.reviews.push(newReview)
    }
  },
  actions: {
    async getEvents(context) {
      const data = await API.get(getUrl);
      context.commit("getEvents", data);
      context.commit("getReviews", data);
    },
    async createEvent(context, newEvent) {
      this.state.loading = true;
      context.commit("createEvent", newEvent);
      await API.put(apiUrl, { meetups: this.state.events, reviews: this.state.reviews });
    },
    async getUser(context) {
      let user = localStorage.user
      if (user) {
        context.commit("saveUser", JSON.parse(localStorage.user))
      }
    },
    async attendEvent(context, eventId) {
      if (!context.state.attendEvents.indexOf(eventId) !== -1) {
        context.state.attendEvents.push(eventId)
      }
      localStorage.setItem("listEvents",JSON.stringify(context.state.attendEvents))
    },
    async getAttendEvents(context) {
      let events = localStorage.getItem("listEvents")
      context.commit("getAttendEvents", JSON.parse(events))
    },
    async createReview(context, newReview) {
      this.state.loading = true;
      context.commit("createReview", newReview);
      await API.put(apiUrl, { meetups: this.state.events, reviews: this.state.reviews });
    },

    async getReviews(context) {
      const data = await API.get(getUrl);
      context.commit("getReviews", data);
      context.commit("getEvents", data);
    },
  },
  modules: {},
});
