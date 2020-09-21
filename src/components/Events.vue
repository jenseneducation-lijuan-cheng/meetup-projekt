<template>
  <div class="meetUps">
    <div class="group">
  <h2>Adventure</h2>
 <Event v-for="event in adventureEvents" :key="event.id" v-bind:event="event"/>
    </div>
    <div class="group">
 <h2>Health</h2>
 <Event v-for="event in healthEvents" :key="event.id" v-bind:event="event"/>
    </div>
    <div>
 <h2>Social</h2>
 <Event v-for="event in socialEvents" :key="event.id" v-bind:event="event"/>
    </div>

  </div> 
</template>

<script>
import Event from './Event'
export default {
    components:{
        Event
    },
    props:['events'],
    computed: {
      adventureEvents() {
        return this.events.filter(event => event.type === "Adventure")
      },
       healthEvents(){
         return this.events.filter(event => event.type === "Health")
       },
       socialEvents(){
         return this.events.filter(event => event.type === "Social")
       }
    }

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.meetUps {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /*margin: 24px;*/
  h2{
    color:$black;
    letter-spacing: 2px;
  }
  .group{
    margin-right:50px;
  }
}

</style>