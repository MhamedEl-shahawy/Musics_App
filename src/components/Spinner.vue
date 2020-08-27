<template>
  <div class="container">
   <img src="../assets/loader.gif">
  </div>
</template>
<script>
export default {
  name: 'spinner',
}
</script>
<style lang="scss">
.container{
  margin:0.5em 0;
  text-align:center;
  width: 100%;
}
img{
    width: 50px;
    height: 50px;
}
</style>