<template>
  <div class="main_home">



      <div class="home">
     <div   v-for="artists in alltodos.tracks" class="main_track">
        <div class="cover">
        <img  :src="artists.artwork_url ?  artists.artwork_url : artists['user'].avatar_url" />
     <a   @click='audio_loader(`${artists.stream_url}?client_id=a281614d7f34dc30b665dfcaa3ed7505`,`${artists.artwork_url}`,`${artists.title}`,`${artists.user["username"]}`)'><v-icon name="play" />
</a>
        </div>
         <router-link :to="'/artist/'+artists.id">
         <div class="track">

            <img  :src="artists['user'].avatar_url" />

       <div class="track_info">
       <p>{{artists.title}}</p>
       <p>{{artists['user'].username}}</p>
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


          grid-gap: 10px;
        .main_track{
           position:relative;
            background: #fff;
            overflow: hidden;
            padding: 8px;
            padding-bottom: 10px;
            width: 100%;

             box-sizing: border-box;
             border: 1px solid #e3e3e3;
              height: 185px;
              .cover{
              width: 100%;
    height: 68%;
    cursor: pointer;
    position: relative;
    background-color: #e1e1e1;

    .fa-icon{

       color:#e1e1e1;
       visibility: hidden;
       transition:0.2s all;
       position:absolute;
       z-index:999;
       left:40%;
       top:30%;
       background-color:#2c3e50;
       border-radius:100%;
       height:50px;
       width:50px;
       font-size:16px;
       padding:0.5em;

    }
    img{
     width:100%;
    height:100%;

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

             width:45px;
             border-radius: 100px;
             margin: 10px 10px -3px 0;
             box-shadow: -2px 1px 13px 0px rgba(0,0,0,0.75);

          }


           p{
                   font-size: 16px;
                   text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    width:70%;
                  display:inline-block;
           }
           .track_info{
             margin-left:4em;
             margin-top:-2.5em;

             }
          }

}
          }
}
@media screen and (min-width: 1200px){
 .home{
    grid-template-columns:repeat(4,1fr);
 }
}
@media screen and (min-width: 850px) and (max-width: 1199px) {
 .home{
    grid-template-columns:repeat(3,1fr);
 }
}
@media screen and (min-width: 600px) and (max-width: 849px) {
.main_home{
  padding:2em;
 .home{
 padding:0em;

    grid-template-columns:repeat(2,1fr);
 }
}
}

@media screen and (max-width: 599px)  {
.main_home{
padding:1em;
 .home{
    padding:0;
    display:block;
    .main_track{
      margin-top:1em;
    }
 }
 }
}
</style>
