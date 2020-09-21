<template>
  <div class="meetup">
    <div class="imageContainer">
      <img :src="`${publicPath}images/${event.image}`" />
    </div>
    <h3>{{event.name}}
    </h3>
    <div>{{event.location}}</div>
    <h4>{{event.date}}</h4>
  </div>

</template>

<script>
export default {
  props: ["event"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.meetup {
  background: $white;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 8px #888888;
  width: 400px;
  .imageContainer {
    overflow: hidden;
    width: 300px;
    height: 300px;
    margin: 30px;

    img {
      min-width: 100%;
      height: 100%;
      left: 50%;
      position: relative;
      transform: translateX(-50%);
    }
  }
  h3{
    color:$black;
  }
}
</style>