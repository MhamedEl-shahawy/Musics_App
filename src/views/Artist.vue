<template>
<div>
<div class="artist-tracks">
  <div class="home">
     <div class="tracks_info">
         <div class="track">
           <a class="playing"  @click='get_aodiu'><v-icon scale="2" name="play" /></a> 
            <img  :src="info.artwork_url ?  info.artwork_url : info['user'].avatar_url" />
          </div>
          <div class="info_player">
            <h3>{{this.info.title}}</h3>
            <div class="main-info">
             <router-link :to="'/user/'+info.user_id" tag="a" class="profile">
              <img  :src="info['user'].avatar_url" />
             {{info['user'].username}}
             </router-link>
              <div class="list">
               <span><v-icon name="comments" /> {{ this.info.comment_count}}</span>
               <span><v-icon name="heart" /> {{ this.info.favoritings_count}}</span>
               <span><v-icon name="play" /> {{ this.info.playback_count}}</span>
              </div>
          </div>
          </div>

     </div>
  </div>
  </div>
   <Musics :key="id" :artist_id="id" :related_tracks="relatedAudois"  v-if="!relatedAudois[0].load"  />
   <Spinner v-else/>
   <Spinner v-if="loading"/>
<div class="comments" v-else>
      <div v-for="comment in   comments" :key="comment.id" class="comment__wrapper"> 
      <router-link  class="comment__user-forward" :to="'/user/'+comment.user_id">
              <img class="comment__cover" :src="comment.user['avatar_url']" />
               </router-link>
     <p class="time">{{comment.created_at}}</p>

              <div class="comment__container">
              <p class="comment__body">{{comment.body}}</p>
             

             </div>
      </div>
  </div>
</div>

</template>

<script>
import Spinner from "@/components/Spinner";
import Musics from "@/components/Musics";
import {mapGetters,mapActions} from 'vuex';


export default {
  name: 'artist',
   data () {
    return {
      info: null,
      id:this.$route.params.id,
      related:null,
      comments:null,
      loading:true,
    }
  },
  components:{
    Musics,Spinner
  },
  computed:{
    ...mapGetters(["relatedAudois"])
  },
   mounted () {
    this.$store.dispatch('relatedMusic',this.id);
  },
    methods:{
     fetchMusic(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/${this.id}?client_id=${ (process.env.NODE_ENV !== 'production')? process.env.VUE_APP_client_id: process.env.client_id }`)
      .then(response => {this.info = response.data; } )
    },
    fetchcomments(){
   this.axios
     .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/${this.id}/comments?client_id=${(process.env.NODE_ENV !== 'production')? process.env.VUE_APP_client_id: process.env.client_id }`)
     .then(response => {this.comments = response.data;this.loading=false;} )
   },
    get_aodiu(id){
          this.$store.dispatch('get_song',this.info);
    },
  
  },
 
    created(){
       this.fetchMusic();
       this.fetchcomments();
    },
     watch: {
          "$route.params.id"() {
                  this.id= this.$route.params.id;
                  this.fetchMusic();
                  this.$store.dispatch('relatedMusic',this.id);
                  this.fetchcomments();
          },
       },

  }
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.artist-tracks{
 width:80%;
 height:auto;
 margin:auto;
 padding:1em;
 font-family: 'Roboto', sans-serif;
  overflow: hidden;
}
.tracks_info{
   width:100%;
   height:180px;
   display:flex;
    background-color:#fff;
     box-shadow: 0 0 10px #e1e0e0;
   justify-content:center;
  margin: 0.5em;
  padding:1em;
    overflow: hidden;

}

.track{
  position:relative;
  height: 100%;
  width:20%;
  margin-bottom:0.5em;
  float:left;
  cursor:pointer;
  transition:0.4s all;
  &:hover .playing{
     display:flex;
  }
}
.playing{
   position: absolute;
   left:50%;
   top:50%;
   transform:translate(-50%,-50%);
  transition:0.3s;
  cursor:pointer;
  display:none;
  justify-content: center;
  align-items: center;
     background-color:rgba(31,31,31,.7);
   width: 100%;
   height: 100%;
     transition:0.4s all;

}
.info_player{
   width:70%;
   margin-left:1em;
     white-space: nowrap;
  text-overflow: ellipsis;
  padding-top:1em;
}
.track img{
  width: 100%;
  height:150px;
  border:1px solid #f1f1f1;
} 
.info_player p{
  color:#42B883;
}
.list{
   display:flex;  
   float:left;
   margin-top:40px;
   margin-left:20px;
}
.list span{
   margin:0  5px;
   color:#b6b9bf;
}
.profile{
   text-decoration:none;
   color:#42B883;
   display:flex;
   align-items:center;
   font-size:1.5em;
   margin-top:1em;
}
.profile img{
  float:left;
  width:50px;
  height:50px;
  margin-right:5px;
  border-radius:100%;
}
.main-info{
   display: flex;
   width:50%;
}
 .playing svg{
  color:#fff;
}
.comments{
   width: 80%;
   overflow:hidden;
   margin:auto;
    height:auto;
 margin:auto;
 padding:1em;
}
.comment__wrapper{
  float:left;
   width:100%;
   height: 100px;
   background:#fff;
   margin-left:1em;
   margin-right:1em;
  padding:1em;
  border:1px solid #f1f1f1;
}
.comment__user-forward{
  text-decoration:none;
}
.comment__cover{
   width: 70px;
   height:70px;
   border-radius:100%;
   border:1px solid #f1f1f1;
   float:left; 
   margin-right:1em;
}
.comment__container{

    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  text-overflow: ellipsis;
}
.comment__body{
   font-size:1.2em;
   color:#777;
    font-family: 'Roboto', sans-serif;
}
.time{
   float:right; 
   margin-top:5px;
}
</style>