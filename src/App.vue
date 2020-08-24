<template>
  <div id="app">
    <header>
     <nav class="nav">
     <ul>
      <router-link to="/" tag="li"> <span class="wrapper">Vue</span>Cloud</router-link> 
     </ul>
     </nav>
    </header>
    <router-view/>

    <div class="main-player">
     <div class="main-player2">          
        <audio
        controls
        autoplay
        :src="singelaudio.url">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
   </div>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'app',

  computed:{
    ...mapGetters(["singelaudio"])
  },  
 mounted () {
    this.$store.dispatch('get_song');

  }

}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');


    .main-player2 {
      width:100%;
      position:fixed;
      margin-top:3em;
      z-index:9999;
      bottom: 0;
      background:#000;
      padding:1em;
      padding-top:2em;
      padding-bottom:2em;
    audio{
      width:100%;
     
    }
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
  ul{
     list-style:none;
     width:100%;
     text-align:center;
     height:100%;
     display:flex;
  
          justify-content: center;
    flex-direction: row;
    align-items:center;
  }
</style>
