<template>
  <div>
  <div class="related_tracks">
    <div class="track" v-for="track in all_audios" :key="track.id">
     <!--   <router-link :to="'/artist/'+track.id"> -->
                                  <img  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" />


               <h3 @click="get_aodiu(track)">{{track.title}}</h3>
      <!--   </router-link> -->
    </div>
  </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'HelloWorld',
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
img{
   cursor: pointer;
}
</style>
