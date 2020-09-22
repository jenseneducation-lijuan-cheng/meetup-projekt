<template>
  <div class="headerContainer">
    <div class="logo">
      <img src="../assets/logologo.png" alt="logo" />
    </div>
    <h1>Ha kul</h1>
    <div class="search">
      <Search v-bind:events="events" v-on:meetupMatch="$emit('meetupmatch', $event)" />
    </div>
    <h3 @click="$router.push('/userMeetup')" class="goPage">Skapa din meetup</h3>
  </div>
</template>

<script>
import Search from "./Search";
export default {
  props: ["events"],
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
  h1 {
    color: $white;
    font-weight: bold;
    letter-spacing: 5px;
    font-size: 3rem;
    text-align: center;
  }
  .goPage {
    height: 50px;
    color: $blue;
    letter-spacing: 2px;
    cursor: pointer;
    margin: 30px 20px 0px 0px;
    &:hover {
      color: $pink;
    }
  }
  .search {
    align-self: center;
  }
}
</style>