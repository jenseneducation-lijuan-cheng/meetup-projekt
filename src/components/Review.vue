<template>
<div class="overlay">
  <div class="review">
    <h2>{{text}}</h2>
    <div class="heart">
   <LikeHeart/>
    </div>
   <textarea rows=5 cols=50 placeholder="Skriv recension här" class="text1"></textarea>
   <span class="close" @click="close()">X</span>
   <button class="recension">Skicka recension</button>
  </div>
</div>
</template>

<script>
import LikeHeart from "../components/LikeHeart"
export default {
  components:{
    LikeHeart
  },
  data:() =>({
    text:"Betyg & Recensioner"
  }),
  methods: {
    close() {
      this.$emit("closeReview")
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.overlay{
    z-index: 10000;
    display: flex;
    justify-content: center;
    background-color: rgba(88, 41, 27, 0.7);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
.review{
  padding: 20px;
  position: relative;
  background: $white;
  margin: 16px;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 1px 1px 8px #888888;
  width: 600px;
  height: 80%;
     .text1{
     outline: none;
     padding: 10px;
 }
 .heart{
   align-self: center;
 }

  .close {
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }
  h2{
    color: $black;
  }
  .recension{
     border-radius: 5px;
     width: 300px;
     align-self: center;
  }
  
}
}
</style>