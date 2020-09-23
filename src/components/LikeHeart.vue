<template>
  <div class="hearts">
      <div v-for="i in 5" :key="i" class="heart">
         <img src="../assets/redheart.png" class="redheart" v-if="points>=i" @click="setPoints(i)">
        <img src="../assets/whiteheart.png" class="lightheart" v-else @click="setPoints(i)">
       
      </div>
  </div>
</template>

<script>
export default {
    data:()=>({
        points:0,
        counter:0
    }),
  
    methods:{
        getCountClick(){
            this.counter++;
            if (this.counter > 5) {
                this.counter = 0;
            }
         /*for(let i = 0;i <this.counter;i++){
             this.setPoints
         }*/
        },
        setPoints(i){
            /*this.getCountClick()
            this.points = this.counter*/
            if (i > this.points) {
                this.points = i;
            } else {
                this.points = i-1;
            }
        }
      
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
img{
    
      width: 30px;
      height: 30px;
      cursor: pointer;
  
}
.hearts {
    display: flex;
}
.heart {
    margin: 10px;
}

</style>