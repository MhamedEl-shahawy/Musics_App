<template>
<div>
<div class="artist_tracks">
  <div class="home">
     <div class="tracks_info">
         <div class="track">
           <a  @click='audio_loader(`${info.stream_url}?client_id=a281614d7f34dc30b665dfcaa3ed7505`,`${info.artwork_url}`,`${info.title}`,`${info.user["username"]}`)'><v-icon name="play" />
            </a>
            <img  :src="info.artwork_url ?  info.artwork_url : info['user'].avatar_url" />
          </div>
          <div class="info_player">
            <h3>{{this.info.title}}</h3>
             <router-link :to="'/user/'+info.user_id">
              <img  :src="info['user'].avatar_url" />
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
   <Hello  :msg="related" />
  </div>
  <div class="comments">
      <div v-for="comment in   comments" :key="2">
      <router-link :to="'/user/'+comment.user_id">
              <img :src="comment.user['avatar_url']" />
              <h3>{{comment.body}}</h3>
              <h3>{{comment.user['username']}}</h3>

       </router-link>
      </div>
  </div>
</div>

</template>

<script>
import Hello from "@/components/HelloWorld";
import {mapActions} from 'vuex';

export default {
  name: 'home',
   data () {
    return {
      info: null,
      id:this.$route.params.id,
      related:null,
      comments:null,

    }
  },
  components:{
    Hello
  },

    methods:{
     fetchMusic(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/${this.id}?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
      .then(response => {this.info = response.data;} )
    },
     fetchUsers(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/${this.id}/related?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
      .then(response => {this.related = response.data;} )
    },
    fetchcomments(){
   this.axios
     .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/${this.id}/comments?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
     .then(response => {this.comments = response.data;} )
   },
    ...mapActions(['fetchtodos','add_Audio']),
    audio_loader(ulr,img,name,art){
         let audios = {
          name:name,
          artist: art,
          url:ulr,
          cover: img,
          lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
         };
         this.add_Audio(audios);

    },
    },
    created(){
       this.fetchMusic();
       this.fetchUsers();
       this.fetchcomments();
    },
     watch: {
          "$route.params.id"(val) {
                   window.location.reload()
          },
       },


  }
</script>
<style lang="scss" scoped>
.artist_tracks{
 width:100%;
 height:100%;
 padding:4em;
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
