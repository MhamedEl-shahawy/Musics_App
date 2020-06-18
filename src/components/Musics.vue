<template>
  <div>
  <div class="related-tracks" v-if="load">
    <div class="track" v-for="track in all_audios" :key="track.id">
     <a class="play" @click="get_aodiu(track)">Play</a>
          <img  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" />
      <router-link :to="'/artist/'+track.id" tag="a" class="track__info">
        <div class="description">
          <h3>{{track.title}}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus iste ipsum repellat</p>
        </div>  
      </router-link> 
    </div>
    </div>
    <div class="related-tracks" v-else>
    <div class="track" v-for="track in related_tracks" :key="track.id">
     <a class="play" @click="get_aodiu(track)">Play</a>
          <img  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" />
      <router-link :to="'/artist/'+track.id" tag="a"  class="track__info">
           <div class="description">
          <h3>{{track.title}}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus iste ipsum repellat</p>
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
   width:80%;
   display:grid;
   grid-gap:20px;
   margin:auto;
   grid-template-columns:repeat(4,1fr);
   font-family: sans-serif;
}
h3 {
  margin: 9px  0 0;
  padding-left:0.4em;
  padding-right:0.4em;
  padding-bottom:0.4em;

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
  color: #fff;
  text-decoration: none;
}
.track{
  position: relative;
  background-color:#192a56;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  padding-bottom:0.7em;
  height:auto;
   .play{
     position: absolute;
     width:24%;
     height:61%;
     left:38%;
     top:0;
     background-color:rgba(46, 204, 113,.6);
     align-items: center;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    display: none;
    color:#e74c3c;
    font-size:1.3em;
    font-weight: bolder;
    }
    &:hover .play{
        display: flex;
    }
}
.description{
   width:100%;
   height:50%;
  /*   text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  display: block; */
}
img{
  width: 100%;
  max-height:50vh;
  cursor: pointer;
}

</style>
