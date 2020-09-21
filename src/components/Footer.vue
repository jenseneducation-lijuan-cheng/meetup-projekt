<template>
  <div class="footer">
    <h3>Följ oss</h3>
    <div class="social">
    <img src="../assets/facebook.png" class="pic">
     <img src="../assets/twitter.png" class="pic">
    </div>
    <div class="contact">
      <h3>Kontakta oss</h3>
      <h4>Ha kul AB</h4>
      <h4>Kungsgatan 1, Stockholm</h4>
      <h4>hakul@hakul.se</h4>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.footer {
  h3, h4{
    color:$white ;
  }
  h3{
    margin-left:20px;
  }
  height: 120px;
  width: 100%;
  background-color: $black;
  display: flex;
 
  .pic{
    border-radius:50px;
    width: 50px;
    height: 50px;
    margin: 25px;
    background: white;
  }
  .contact{
    margin-left:20px;
  }
}
</style>