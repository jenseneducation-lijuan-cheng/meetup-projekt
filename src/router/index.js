import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserMeetup from '../views/UserMeetup.vue'
import EventsInfo from '../views/EventsInfo.vue'
import Attend from '../views/Attend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/userMeetup',
    name:'UserMeetup',
    component:UserMeetup
  },
  {
    path:'/eventsInfo/:id',
    name:"EventsInfo",
    component:EventsInfo
  },
  {
    path:'/attend/:id',
    name:Attend,
    component:Attend
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
