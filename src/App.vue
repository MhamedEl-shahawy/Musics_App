<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <div class="main-player">
     <div class="main-player2">          
        <audio
        controls
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


    .main-player2 {
      width:100%;
      position:fixed;
      margin-top:3em;
      z-index:9999;
      bottom: 0;
      background:#42b983;
      padding:1em;
    audio{
      width:100%;
     
    }
    }


</style>
