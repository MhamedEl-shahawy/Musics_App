<template>
  <div>
  <div class="related-tracks">
  <div  v-if="load">
    <div class="track" v-for="track in all_audios" :key="track.id">
     <a class="play" @click="get_aodiu(track)">Play</a>
      <router-link :to="'/artist/'+track.id" tag="a">
          <img  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" />
          <h3>{{track.title}}</h3>
      </router-link> 
    </div>
    </div>
    <div v-else>
    <div class="track" v-for="track in relatedAudois" :key="track.id">
     <a class="play" @click="get_aodiu(track)">Play</a>
      <router-link :to="'/artist/'+track.id" tag="a">
          <img  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" />
          <h3>{{track.title}}</h3>
      </router-link> 
    </div>
   </div>
  </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'HelloWorld',

  props: ['load',"artist_id"],
  computed:{
    ...mapGetters(["all_audios","relatedAudois"])
  },
   mounted () {
    this.$store.dispatch('fetchtodos');
    this.$store.dispatch('relatedMusic',this.artist_id);
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
   grid-template-columns:repeat(3,1fr);
   text-align:center;
}
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
.track{
  position: relative;
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
img{

   cursor: pointer;

}

</style>
