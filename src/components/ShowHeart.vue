
<template>
  <div class="hearts">
    <div v-for="i in 5" :key="i" class="heart">
      <img src="../assets/redheart.png" class="redheart" v-if="points>=i" @click="setPoints(i)" :id="`red${i}`"/>
      <img src="../assets/whiteheart.png" class="lightheart" v-else @click="setPoints(i)" :id="`white${i}`"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['points'],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.hearts {
  display: flex;
}
.heart {
  margin: 5px;
}
</style>