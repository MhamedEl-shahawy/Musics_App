<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
      <div class="main_home">
      <div class="home">
     <div   v-for="artists in info">
        <div>
          <img :src="artists.user['avatar_url']"  />
       <h3 @click='audio_loader(`${artists.stream_url}?client_id=a281614d7f34dc30b665dfcaa3ed7505`,`${artists.user["avatar_url"]}`,`${artists.title}`,`${artists.user["permalink"]}`)'>{{artists.title}}</h3>
        </div>
        </div>

      
     </div>

  </div>
    <div class="main_player">
     <div class="main_player2">
            <aplayer :audio="audio" :lrcType="3" />
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',

 data() {
    return {
      audio: {
        name: '',
        artist: '',
        url:'',
        cover: '',
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
      },
      info:null,
    }
  },

    methods:{
     fetchMusic(){
    this.axios
      .get('https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505')
      .then(response => this.info = response.data )
    },
    audio_loader(ulr,img,name,art){
        this.audio['url']=ulr;
        this.audio['cover'] = img;
        this.audio['name'] = name;
        this.audio['artist'] = art;

           
    }
    },
    created(){
       this.fetchMusic();
       
    },
}

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
  height:100%;

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
      top:85%;
      margin-top:3em;
      z-index:9999; 
    }
    }
  
.main_home{
   width:100%;
   height:100%;
  .home{
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:repeat(5,1fr); 
          grid-gap: 10px;
          div{
           position:relative;
          img{
             border-radius:5px;
             max-width:100%;
             margin-bottom:1em;
          
          }
          &:after{
               content:"ss";
               position:absolute;
               top:40%;
               z-index:999;
               left:45%;
           }
           h3{
               cursor:pointer;
           }
          }
  }
}
</style>
