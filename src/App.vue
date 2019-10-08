<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <div class="main_player">
     <div class="main_player2">
            <aplayer :audio="audios_info" :lrcType="3" />
    </div>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'app',

 
  methods: {
      ...mapActions(['add_Audio']),
},
 computed:mapGetters(['audios_info']),
    created(){
     this.add_Audio();
     }
}

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position:relative;
  height:100%;
  background-color:#888;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

    .main_player2 {
    .aplayer{
      position:fixed;
      width:100%;
      top:50%;
      margin-top:3em;
      z-index:9999; 
    }
    }
  

</style>
