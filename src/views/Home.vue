<template>
  <div class="home">
    <Header />
    <Events v-bind:events="meetups" />
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
  created() {
    
      this.$store.dispatch("getEvents");
    
  },
};
</script>

<style  lang ="scss" scoped>
@import "../assets/scss/main.scss";
</style>
