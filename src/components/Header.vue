<template>
  <div class="headerContainer">
    <div class="logo">
      <img src="../assets/logologo.png" alt="logo" />
    </div>
    <h1>Ha kul</h1>
    <Search />
  </div>
</template>

<script>
import Search from "./Search";
export default {
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.headerContainer {
  height: 100px;
  width: 100%;
  background-color: $black;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 80px;
    height: 75px;
    margin: 20px;
  }
  h1{
    color: $white;
    font-weight:bold;
    letter-spacing: 5px;
    font-size:3rem;
    text-align: center;
  }
  h3{
    color:$white;
  }
}
</style>