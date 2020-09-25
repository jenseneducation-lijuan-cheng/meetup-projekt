<template>
  <div class="showReview">
      <h1>{{textR}}</h1>
      <div v-for="review in reviews" :key="review.id" class="review">
          <ShowHeart :points="review.likes" />
          <span>{{review.textName}}</span>
      </div>
  </div>
</template>

<script>
import ShowHeart from '../components/ShowHeart'
export default {
    components: {
        ShowHeart,
    },
    props: ['reviews'],
    data:() => ({
        textR:"Betyg & Recensioner"
    })

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.showReview{
    background: $white;
   margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 8px #888888;
  width: 400px;
  h1{
      color:$darkpink;
  }
  .review {
      width: 90%;
      margin-top: 20px;
      border-top: 1px solid $light-gray;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      word-break: break-all;
  }
}

</style>