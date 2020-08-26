<template>
<div>
<div class="artist_tracks">
  <div class="home">
     <div class="tracks_info">
         <div class="track">
            <img  :src="info.avatar_url" />
          </div>
          <div class="info_player">
            <h3>{{this.info.full_name}}</h3>
            
              <ul>
               <li><v-icon name="comments" /> {{ this.info.followers_count}}</li>
               <li><v-icon name="heart" /> {{ this.info.followings_count}}</li>
               <li><v-icon name="play" /> {{ this.info.track_count}}</li>
              </ul>
          </div>
     </div>
  </div>
  </div>
   <Musics :key="id" :artist_id="id" :related_tracks="userTracks" />

</div>

</template>

<script>
import Musics from "@/components/Musics";
import {mapGetters,mapActions} from 'vuex';


export default {
  name: 'user',
   data () {
    return {
      info: null,
      id:this.$route.params.id,
      related:null,
      comments:null,
      userTracks:null

    }
  },
  components:{
    Musics
  },
   mounted () {
     this.getUserTracks();
  },
    methods:{
     fetchMusic(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/users/${this.id}?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
      .then(response => {this.info = response.data;} )
    },
    getUserTracks(){
         this.axios
     .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/users/${this.id}/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
     .then(response => {this.userTracks = response.data;} )
        
    }
  
  },
 
    created(){
       this.fetchMusic();     
    },
     watch: {
          "$route.params.id"() {
            this.id= this.$route.params.id;
            this.fetchMusic();
          },
       },

  }
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.artist_tracks{
 width:100%;
 height:100%;
 padding:4em;
 font-family: 'Roboto', sans-serif;

  .tracks_info{
   width:70%;
   height:180px;
   background-color:#f00;
    .track{
        position:relative;
        display:inline-block;
    }
    .info_player{
    position:relative;
    display:inline-block;
    }
  }
}
</style>