<template>
  <div class="infor">
    <Header/>
    <div class="inforContainer">
    <EventInfo v-bind:event="meetup"/>
    </div>
    <div class="pushButton">
    <button class="push" @click="goToAttend">anmäla sig till meetups</button>
    <button class="push" @click="toggleReview()">Skriv Recension </button>
    </div>
    <div>
    <Review v-if="review" @closeReview="toggleReview()"/> 
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventInfo from "../components/EventInfo";
import Review from "../components/Review";
export default {
   components:{
     Header,
     Footer,
     EventInfo,
     Review
   },
   data: () => ({
     review: false,
   }),
  computed:{
     eventId() {
       return this.$route.params.id
     },
     meetups(){
       return this.$store.state.events

     },
     meetup(){
       return this.meetups.find(event => event.id == this.eventId)
     }
  },
  methods:{
    goToAttend(){
      this.$router.push(`/attend/${this.eventId}`)
    },
    toggleReview() {
      this.review = !this.review;
    }

  },
  async created() {
    await this.$store.dispatch("getEvents")
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.infor{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  .pushButton{
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  .push {
    border-radius: 3px;
    width: 169px;
    height: 40px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    align-self: center;
    color:$dark-gray;
    margin-top: 50px;
  }
  }  
}
</style>