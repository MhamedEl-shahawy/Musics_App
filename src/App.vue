<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <div class="main-player">
     <div class="main-player2">
<!--             <aplayer :audio="singelaudio" :lrcType="3" :autoplay="true" />
 -->            
   <av-waveform 
      :audio-src="singelaudio.url"
    ></av-waveform>
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
    .aplayer{
      position:fixed;
      width:100%;
      top:50%;
      margin-top:3em;
      z-index:9999;
    }
    }


</style>
