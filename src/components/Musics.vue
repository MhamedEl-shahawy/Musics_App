<template>
  <div>
  <div class="related-tracks" v-if="load">
    <div class="track" v-for="track in (searchTracks || all_audios)" :key="track.id">
        <div class="related-tracks__container">
        <a class="playing"  @click='get_aodiu(track)'><v-icon scale="2" name="play" /></a> 
          <img  class="related-tracks__main-cover" :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" alt="cover"/>
        </div> 

        <div class="description">
          <router-link :to="'/user/'+track.user_id" tag="a" class="track__info">
          <div class="relared-tracks__desc-container float">
          <img class="related-tracks__desc-img"  :src="track['user'].avatar_url ? track['user'].avatar_url : track.artwork_url" alt="cover"  />
          </div>
          </router-link> 
          <div class="relared-tracks__desc-container flex">
            <router-link :to="'/artist/'+track.id" tag="a" class="track__info">
          <h5 class="relared-tracks__desc-h4">{{track.title}}</h5>
            </router-link> 
          <router-link :to="'/user/'+track.user_id" tag="a" class="track__info">
          <p class="related-tracks__desc-p">{{track["user"].username}}</p>
           </router-link> 
          </div>
        </div>  
    </div>
    </div>
     <div class="related-tracks" v-else>
    <div class="track" v-for="track in related_tracks" :key="track.id">
        <div class="related-tracks__container">
        <a class="playing"  @click='get_aodiu(track)'><v-icon scale="2" name="play" /></a> 
          <img  class="related-tracks__main-cover" :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" alt="cover"/>
        </div> 
      
        <div class="description">
          <router-link :to="'/user/'+track.user_id" tag="a" class="track__info">
          <div class="relared-tracks__desc-container float">
          <img class="related-tracks__desc-img"  :src="track['user'].avatar_url?  track['user'].avatar_url : track.artwork_url" alt="cover"  />
          </div>
           </router-link> 
          <div class="relared-tracks__desc-container flex">
          <router-link :to="'/artist/'+track.id" tag="a" class="track__info">
          <h5 class="relared-tracks__desc-h4">{{track.title}}</h5>
          </router-link> 
          <router-link :to="'/user/'+track.user_id" tag="a" class="track__info">
          <p class="related-tracks__desc-p">{{track["user"].username}}</p>
            </router-link> 
          </div>
        </div>  
      
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'musics',
  props: ['load',"artist_id","related_tracks"],
  data(){
    return{
     searchTracks:"",
     search:this.$route.params.name
  }
  },
  computed:{
    ...mapGetters(["all_audios"])
  },
   mounted () {
    this.$store.dispatch('fetchtodos');
  },
  methods:{
    get_aodiu(id){
         this.$store.dispatch('get_song',id);
    },
     searchFiders(){
      this.axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks?q=${this.$route.params.name}
        &client_id=${process.env.VUE_APP_client_id}`)
     .then(response => {
       (this.$route.params.name != undefined ) ? 
       this.searchTracks = response.data : this.searchTracks = ""
       }
       )    
    },
    
  },
   
  watch: {
          "$route.params.name"() {
                  this.searchFiders();       
          },
    },
   mounted(){
    let self = this;
    setTimeout(function() {
      self.$nextTick(function() {
         this.searchFiders();  
      })

    }, 2000);
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.related-tracks{
   width:100%;
   display:grid;
   grid-gap:10px;
   margin:auto;
   grid-template-columns:repeat(4,1fr);
   padding:1em;
   font-family: 'Roboto', sans-serif;
  
}
p{
  padding-left:0.4em;
  padding-right:0.4em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
  text-decoration: none;
}
.track{
  background-color:#fff;
  overflow: hidden;
  box-shadow: 0 0 10px #e1e0e0;
  height: 160px;
  transition: all .2s ease;
  padding: 1em 1em 0.4em 1em;
  margin: 0.5em;  
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover{
    box-shadow: 0 0 18px #c9c9c9;
  }
 
}
.description{
  width:100%;
  height:100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}
.related-tracks__desc-img{
    cursor: pointer;
    width:44px;
    height: 44px;
    border-radius: 100%;
    float:left;
    margin-right: 7px;
    margin-left:7px;
    cursor: pointer;
}
.relared-tracks__desc-container{
  height: 100%;
  margin-right: 9px;
  padding-top:5px;
}
.float{
  float: left;
}
.related-tracks__container{
  position: relative;
    width: 100%;
  height:60%;
  cursor: pointer;
  &:hover .playing{
    display: flex;
  }
}
.relared-tracks__desc-h4{
  padding-top:2px;
  text-overflow: ellipsis;
  width: 100%;
  font-weight: bolder;
  
}
.flex{
  display: flex;
    flex-flow: column;
    justify-content: flex-start;
      padding-top: 10px;

}
.related-tracks__main-cover{
  width: 100%;
  height:100%;
}
  .playing{
   position: absolute;
   left:50%;
   width:100%;
   height: 100%;
   background-color:rgba(242,247,240,.7);
   top:50%;
   transform:translate(-50%,-50%);
  transition:0.3s;
  cursor:pointer;
  display: none;
  justify-content: center;
  align-items: center;
}
  .related-tracks__container:hover .play{
     opacity:1;
  }
.track__info{
  text-overflow: ellipsis;
}
.related-tracks__desc-p{
  color:#51B05E;
  padding-top:5px;
  width: 100%;
  font-size: 0.9rem;
  &:hover{
      color:#A1A1A1;

  }
}
@media only screen and (min-width: 320px) and(max-width: 600px) {
  .related-tracks{
   grid-template-columns:repeat(1,1fr);
   padding:0em;
}
}
@media only screen and (min-width: 601px) and(max-width: 900px) {
  .related-tracks{
   grid-template-columns:repeat(3,1fr);
   padding:0em;
}
}
@media only screen and (min-width: 1000px){
  .related-tracks{
   width:80%;
   grid-gap:4px;
  }
}
 .playing svg{
  color:#42B883;
}
</style>
