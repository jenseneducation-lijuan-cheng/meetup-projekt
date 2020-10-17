<template>
  <div class="infor">
    <Header/>
    <div class="inforContainer">
       <router-link class="back" to="/">Home</router-link>
     <div class=container>
    <EventInfo v-bind:event="meetup"/>
    <div class="pushButton">
    <button class="push" @click="goToAttend">anmäla sig till meetups</button>
    <button class="push" @click="toggleReview()" :disabled="!attend">{{buttontext}} </button>
    </div>
    </div>
     <div class="show"><ShowReview :reviews="reviews" v-if="reviews.length>0"/>
    </div>
    </div>
    <div>
    <Review :eventId="eventId" v-if="review" @closeReview="toggleReview()" @getReview="saveAll($event)"/> 
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventInfo from "../components/EventInfo";
import Review from "../components/Review";
import ShowReview from "../components/ShowReview"
export default {
   components:{
     Header,
     Footer,
     EventInfo,
     Review,
     ShowReview
   },
   data: () => ({
     review: false,
     text1:"Skriv Recension",
     text2:"Anmäl dig för att skriva recension"
   }),
  computed:{
    reviews() {
      return this.$store.state.reviews.filter(review => review.eventId == this.eventId)
    },
     eventId() {
       return parseInt(this.$route.params.id)
     },
     meetups(){
       return this.$store.state.events

     },
     meetup(){
       return this.meetups.find(event => event.id == this.eventId)
     },
     attend(){
       return this.$store.state.attendEvents.indexOf(this.eventId)!= -1
     },
     buttontext(){
       if(this.attend){
       return this.text1
       }else{
         return this.text2
       }
     }
  },
  methods:{
    goToAttend(){
      this.$router.push(`/attend/${this.eventId}`)
    },
    toggleReview() {
      this.review = !this.review;
    },
      async saveAll(review){
       await this.$store.dispatch('createReview',review)
       this.getAll()
       

       },
       async getAll(){
         await this.$store.dispatch('getReviews')
         await this.$store.dispatch('getAttendEvents')
       }
    

  },
  async created() {
    await this.$store.dispatch("getEvents")
    await this.getAll()
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
    //width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    //margin-bottom:50px;
  .push {
    border-radius: 3px;
    width: 169px;
    height: 40px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    align-self: center;
    color:$dark-gray;
  }
  } 
  .inforContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
     .back{
    position: absolute;
    top:0px;
  }
  }
 
}
</style>