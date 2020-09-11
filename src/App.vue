<template>
  <div id="app">
    <header>
     <nav class="nav">
     <ul class="nav-wrapper">
      <router-link to="/" tag="li" class="nav-wrapper__li"> <span class="wrapper">Vue</span>Cloud</router-link> 
      <li class="nav-wrapper__li search"><input type="text"  @keyup.enter="goForward" placeholder="Search Musics..." v-model="search" /></li>
      
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
    height: 8vh;
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
    width:70%;
    height:100%;
    display:flex;
    justify-content:space-around; 
    margin:auto;
  }
  .nav-wrapper__li{
    cursor: pointer;
     width: 50%;
  }
   .search input{
     border:none;
    border-radius:5px; 
    padding:0.4em;
    width:70%;
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
  @media only screen and (max-width: 1100px){
    .nav{
       padding:1em;
       height:auto;
    }
      .nav-wrapper{
       flex-direction:column;
       margin-top:10px;
       width:100%;
      }
      .nav-wrapper__li{
       display:block;
       width:100%;
      }
  }
</style>