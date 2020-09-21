<template>
  <div class="admin">
     <Header/>
      <div class="container">
      <Form/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Form from  "../components/Form";
import Header from  "../components/Header";
import Footer from  "../components/Footer"

export default {
    components:{
        Form,
        Header,
        Footer
    },
   
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.admin {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  

  .admin-logo{
      margin: 24px auto auto 24px;
      color:$white;
  }
  .container{
      width: 1150px;
      height: 100%;
      display: flex;
    
      margin:0px auto 0px auto;
       
    
  }
 
}

</style>