<template>
  <div class="home">
     <div class="tracks_info">

         <div class="track">
           <a  @click='audio_loader(`${artists.stream_url}?client_id=a281614d7f34dc30b665dfcaa3ed7505`,`${artists.user["avatar_url"]}`,`${artists.user["username"]}`,`${artists.user["permalink"]}`)'><v-icon name="play" />
            </a>
             <img :src="info['user'].avatar_url" /> 
          </div>
          <div class="info_player">
            <h3>{{this.info.title}}</h3>
             <router-link :to="'/user/'+info.user_id">
             <img :src="info['user'].avatar_url" /> 
                           <span>See More</span> 
                </router-link>            
              <ul>
               <li><v-icon name="comments" /> {{ this.info.comment_count}}</li>
               <li><v-icon name="heart" /> {{ this.info.favoritings_count}}</li>
               <li><v-icon name="play" /> {{ this.info.playback_count}}</li>
              </ul>             
          </div>
     </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
   data () {
    return {
      info: null,
      id:this.$route.params.id
    }
  },

    methods:{
     fetchMusic(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/${this.id}?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
      .then(response => {this.info = response.data; console.log(this.info)} )
    }
    },
    created(){
       this.fetchMusic();
       
    },
    computed:{
     products(){
       return this.$store.state.products
     }
    }
   
  
  }
</script>
<style lang="scss" scoped>
  .home{
    width:100%;
    height:100%;
    padding:4em;
    .tracks_info{
     width:50%;
     height:20vh;
     border:2px solid #f00;
      display:grid;
          grid-template-columns:repeat(1,1fr 2fr); 
          grid-gap: 13px;
          padding:0.2em;
          overflow:hidden;
     .track{
       position:relative;
        width:100%;  
       
     img{

       max-width:100%;
       position:absolute;
       left:1%;
       height:18.3vh;
     }
     a{
       position:absolute;
       left:40%;
       z-index:999;   
        .fa-icon{
               margin-top:2em;
               color:#fff;
               visibility: hidden;
               transition:0.2s all;
               font-size:2em;
              }
             
     }
        &:hover{
                 .fa-icon{
               visibility: visible;
                 }
              }
    }
    .info_player{
      position:relative;
        width:100%;
        padding-top:1em;
      h3{
        margin-top:0.3em;
        margin-bottom:0.4em;
          
      }
      img{
         width:4vw;  
         border-radius:100%;
      }
      span{
        color: #909297;
        font-size: 16px;

      }
      ul{
        li{
         display:inline-block;
         padding-left:0.6em;
         padding-top:0.6em;

        }
      }
    }
    }
  }

</style>
