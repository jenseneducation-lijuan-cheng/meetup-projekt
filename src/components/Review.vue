<template>
<div class="overlay">
  <div class="review">
    <h2>{{text}}</h2>
   <LikeHeart/>
   <textarea rows=5 cols=50 placeholder="Skriv recension här"></textarea>
   <span class="close" @click="close()">X</span>
   <button>Skicka recension</button>
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
    background-color: rgba(66, 26, 14, 0.7);
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
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 8px #888888;
  width: 600px;
  .close {
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }
  h2{
    color: $black;
  }
}
}
</style>