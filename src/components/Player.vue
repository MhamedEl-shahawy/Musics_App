<template>
  <div>
    <div class="main-player"  v-if="play">
     <div class="main-player2">          
        <audio
       
        controls
        autoplay
        :src="play">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
   </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'player',
  props: ["play"],
}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

    .main-player2 {
      width:100%;
      position:fixed;
      margin-top:3em;
      z-index:9999;
      bottom: 0%;
      background:#000;
      height: 7vh; 
      padding:0.5em;
    }
       audio{
      width:100%;
      margin-top:10px;
      margin: auto;
      height: 100%;
    }
  header{
    width:100%;
  }
  .nav{
    width: 100%;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    background-color:#3A3F41;
    font-size:2em;
    color:#fff;
  }
  .wrapper{
     color:#42B883;
     text-transform:uppercase;
  }
  .nav-wrapper{
    list-style:none;
    width:100%;
    text-align:center;
    height:100%;
    display:flex;
    cursor: pointer;
    justify-content: center;
    flex-direction: row;
    align-items:center;
  }
  .footer{
    clear: both;
    width: 100%;
    height: auto;
    background-color: #3A3F41;
    text-align: center;
    padding: 0.5em;
    font-size: 1.3em;
    margin-top:1em;
  }
  .copyright{
     color:#42B883;
     text-transform: capitalize;
     font-family: 'Roboto', sans-serif;
  }
  .footer__owner{
    color:#42B883;
    text-decoration: none;
  }
  .footer__owner:hover{
    color:#fff;
  }
</style>