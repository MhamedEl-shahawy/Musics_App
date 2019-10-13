<template>
  <div class="main_home">



      <div class="home">
     <div   v-for="artists in alltodos.tracks" class="main_track">
        <div class="cover">
     <a   @click='audio_loader(`${artists.stream_url}?client_id=a281614d7f34dc30b665dfcaa3ed7505`,`${artists.artwork_url}`,`${artists.title}`,`${artists.user["username"]}`)'><v-icon name="play" />
</a>
        </div>
         <router-link :to="'/artist/'+artists.id"><div class="track">
          <img :src="artists.user['avatar_url']"  />
       <a>{{artists.title}}</a>
        </div>
       </router-link>

     </div>

  </div>

  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'home',

 data() {
    return {
      info:null,
    }
  },

    methods:{
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
     computed:mapGetters(['alltodos']),
     created(){
     this.fetchtodos();
     }
}

</script>
<style lang="scss">
a{
   color:#192a56;
   font-weight:bolder;
}


.main_home{
   width:100%;
   height:100%;
   padding:4em;
  .home{
    width:100%;
    height:100%;
    display:grid;
    padding:4em;
    text-align:center;
    grid-template-columns:repeat(4,1fr);
          grid-gap: 10px;
        .main_track{
           position:relative;
            background: #fff;
            overflow: hidden;
            padding: 8px;
             box-sizing: border-box;
             border: 1px solid #e3e3e3;
              height: 170px;
              .cover{

              background:url('https://picsum.photos/200/300/?blur=1');
              width: 100%;
    height: 100px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    cursor: pointer;
    position: relative;
    background-color: #e1e1e1;
            .fa-icon{
               margin-top:1.5em;
               color:#fff;
               visibility: hidden;
               transition:0.2s all;
              }
              &:hover{
                 .fa-icon{
               visibility: visible;
                 }
              }
            }
         .track{
           position:absolute;
           bottom:0;
              width:100%;

          img{
             border-radius:50% 50% 46% 54% / 79% 77% 23% 21% ;
             max-width:5vw;
             margin-left:0.2em;
             box-shadow: -2px 1px 13px 0px rgba(0,0,0,0.75);

          }


           a{
                  margin: 12px 0 5px;
                   font-size: 16px;
                   display:block;
           }
          }

}
          }
}

</style>
