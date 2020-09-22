<template>
  <div class="home">
    <Header v-bind:events="meetups" v-on:meetupmatch="setMatch($event)"/>
    <Events v-bind:events="filteredMeetups" />
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Events from "../components/Events";
import Footer from "../components/Footer"
export default {
  name: "Home",
  components: {
    Header,
    Events,
    Footer
  },
  computed:{

     meetups(){
       return this.$store.state.events

     }
  },
  methods:{
     setMatch(meetups) {
      this.filteredMeetups = meetups;
    },
  },
  async created() {
      await this.$store.dispatch("getEvents");
      this.filteredMeetups = this.meetups
  },
  data:() =>({
    filteredMeetups: [],
  })
};
</script>

<style  lang ="scss" scoped>
@import "../assets/scss/main.scss";
</style>
