<template>
<div class="row">
  <div class="col-sm-12 text-center" id="home">
    <div class="backgroud">
      <h1>欢迎品尝PIZZA</h1>
      <h2>这里有很好吃的PIZZA</h2>
      <button @click='goToBefore' class="btn btn-success">let`s order!</button>
    </div>
  </div>
  <h1>Home</h1>
<button @click='goToBefore' class="btn btn-success">
  跳转上次
</button>
<button @click='goToMenu' class="btn btn-success">
  跳转到菜单
</button>
</div>
  
</template>
<script>
export default {
  methods:{
    goToBefore(){
      //跳转到上一次
this.$router.go(-1)
    },
       goToMenu(){
      //跳转到菜单
// this.$router.replace('/menu')
// this.$router.replace({name:'menuLink'})
this.$router.push('/menu')
    }
  }
}
</script>


<style>
#home{
  background:rgb(234, 247, 238);
  height:85vh;
  padding: 10%;
  }
  h1,h2{
    margin:6%;
  }
</style>