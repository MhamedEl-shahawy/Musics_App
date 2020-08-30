<template>
<div>
<div class="user_profile">
  <div class="home">
     <div class="tracks_info">
         <div class="track">
            <img  class="track-avatar" :src="info.avatar_url" />
          </div>
          <div class="info_player">
            <a :href="info.permalink_url" target="_blank" class="sound-profile"> <h3 class="info-title">{{this.info.full_name || this.info.username}}</h3></a>
            
              <ul class="info-list">
               <li><v-icon name="user"  scale="2"/> <br><span class="wrapper-icon">{{ this.info.followings_count}}</span></li>
               <li><v-icon name="users" scale="3" /><br> <span class="wrapper-icon">{{ this.info.followers_count}}</span></li>
               <li><v-icon name="play" scale="2"/><br> <span class="wrapper-icon">{{ this.info.track_count}}</span></li>
              </ul>
              <p class="desc">{{this.info.description}}</p>
              <a class="website" v-if="info.website" :href="info.website" target="_blank">{{this.info.website_title || this.info.full_name || this.info.username}}</a>
          </div>
     </div>
  </div>
  </div>
  <Spinner v-if="loading"/>
  <Musics :key="id" :artist_id="id" :related_tracks="userTracks"  v-else/> 
</div>
</template>

<script>
import Musics from "@/components/Musics";
import Spinner from "@/components/Spinner";
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'user',
   data () {
    return {
      info: null,
      id:this.$route.params.id,
      related:null,
      comments:null,
      userTracks:null,
      loading:true,
     

    }
  },
  components:{
    Musics,Spinner
  },
   mounted () {
     this.getUserTracks();
  },
    methods:{
     fetchMusic(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/users/${this.id}?client_id=${ process.env.VUE_APP_client_id}`)
      .then(response => {this.info = response.data;} )
    },
    getUserTracks(){
         this.axios
     .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/users/${this.id}/tracks?client_id=${ process.env.VUE_APP_client_id}`)
     .then(response => {
       this.userTracks = response.data; 
       this.loading = false;
       })   
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

.user_profile{
   width:80%;
   height:auto;
   overflow:hidden;
   text-align:center;
   margin:auto;
   margin-top:1em;
   padding:1em;
    font-family: 'Roboto', sans-serif;
    color:#303133;
   background-color:#fff;
   box-shadow: 0 0 10px #e1e0e0;
   font-smoothing: antialiased;
}
.home{
   width:100%;
}
.track{
   width:100%;
}
.info-title{
   font-size:1.6em;
   line-height:50px;
}
.track-avatar{
   border:1px solid #f1f1f1;
   border-radius:100%;
   width:120px;
   height:120px;
}
.sound-profile{
    text-decoration:none;
    color:#303133;
}
.info-list{
  width:100%;
  list-style:none;
  display:flex;
  justify-content:center;
}
.info-list li{
   margin:15px;
   color:#A1A1A1;
}  
.desc{
   width:100%;
   color:#999A9B;
   line-height:28px;
}
.website{
   margin:1em;
   color:#42B883;
}
.wrapper-icon{
   padding-top:7px;
     font-size:1.3em;
}
</style>