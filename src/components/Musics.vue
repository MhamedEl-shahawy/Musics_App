<template>
  <div>
  <div class="related-tracks" v-if="load">
    <div class="track" v-for="track in all_audios" :key="track.id">
        <div class="related-tracks__container">
         <a class="play" @click="get_aodiu(track)">Play</a>
          <img  class="related-tracks__main-cover" :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" alt="cover"/>
        </div> 
      <router-link :to="'/artist/'+track.id" tag="a" class="track__info">
        <div class="description">
          <div class="relared-tracks__desc-container float">
          <img class="related-tracks__desc-img"  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" alt="cover"  />
          </div>
          <div class="relared-tracks__desc-container flex">
          <h5 class="relared-tracks__desc-h4">{{track.title}}</h5>
          <p class="related-tracks__desc-p">{{track["user"].username}}</p>
          </div>
        </div>  
      </router-link> 
    </div>
    </div>
     <div class="related-tracks" v-else>
    <div class="track" v-for="track in related_tracks" :key="track.id">
        <div class="related-tracks__container">
         <a class="play" @click="get_aodiu(track)">Play</a>
          <img  class="related-tracks__main-cover" :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" alt="cover"/>
        </div> 
      <router-link :to="'/artist/'+track.id" tag="a" class="track__info">
        <div class="description">
          <div class="relared-tracks__desc-container float">
          <img class="related-tracks__desc-img"  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" alt="cover"  />
          </div>
          <div class="relared-tracks__desc-container flex">
          <h5 class="relared-tracks__desc-h4">{{track.title}}</h5>
          <p class="related-tracks__desc-p">{{track["user"].username}}</p>
          </div>
        </div>  
      </router-link> 
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'musics',
  props: ['load',"artist_id","related_tracks"],
  computed:{
    ...mapGetters(["all_audios"])
  },
   mounted () {
    this.$store.dispatch('fetchtodos');
  },
  methods:{
    get_aodiu(id){
         this.$store.dispatch('get_song',id);
    }
  }
}
</script>

<style scoped lang="scss">
.related-tracks{
   width:100%;
   display:grid;
   grid-gap:10px;
   margin:auto;
   float: left;
   grid-template-columns:repeat(4,1fr);
   font-family: sans-serif;
   padding:1em;
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
.play{
     position: absolute;
     width:100%;
     height:100%;
     left:0%;
     top:0;
     background-color:rgba(46, 204, 113,.6);
     align-items: center;
    flex-direction: row;
    display:flex;
    justify-content: center;
    cursor: pointer;
    color:#e74c3c;
    font-size:1.3em;
    font-weight: bolder;
    opacity: 0;
    transition: all 0.4s;
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

</style>
