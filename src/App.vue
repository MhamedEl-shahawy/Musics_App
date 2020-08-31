<template>
  <div id="app">
    <header>
     <nav class="nav">
     <ul class="nav-wrapper">
      <router-link to="/" tag="li" class="nav-wrapper__li"> <span class="wrapper">Vue</span>Cloud</router-link> 
      <li class="nav-wrapper__li"><input type="text"  @keyup.enter="goForward" placeholder="search" v-model="search" /></li>
      
     </ul>
     </nav>
    </header> 
    <router-view/>
   <Player :play="singelaudio.url" />
    <footer class="footer">
       <h4 class="copyright"> © 2020 create by <a class="footer__owner" href="https://github.com/MhamedEl-shahawy" target="_blank"> @MhamedEl-shahawy (github)</a> all rights reserved</h4>
    </footer>
  </div>
</template>
<script>
import Player from "./components/Player";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'app',
  components: {
    Player
  },
  computed:{
    ...mapGetters(["singelaudio"])
  },  
 mounted () {
    this.$store.dispatch('get_song');
  },
  methods: {
    goForward(){
      this.$router.push(`/${this.search}`)
    }
  },

}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

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
   
    justify-content: center;
    flex-direction: row;
    align-items:center;
  }
  .nav-wrapper__li{
 cursor: pointer;
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