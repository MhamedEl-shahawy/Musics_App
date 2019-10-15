<template>
  <div class="home">
     <div class="user_info">

           <div>
             <img :src="info.avatar_url" />
              <h3>{{this.info.full_name}}</h3>
              <ul>
               <li><v-icon name="comments" /> {{ this.info.track_count}}</li>
               <li><v-icon name="heart" /> {{ this.info.public_favorites_count}}</li>
               <li><v-icon name="play" /> {{ this.info.playlist_count}}</li>
              </ul>
              </div>
          <p>{{this.info.description}}</p>
     </div>
     <div class="followers">
        <h3>Following Users</h3>
        <div class="following">

       <div class="follow" v-for="s in followers">
        <router-link :to="'/user/'+s.id">
          <img :src="s.avatar_url" />
          <span>See</span>
          <span><v-icon name="map-marker-alt" /> Earth</span>
                </router-link>
       </div>

       </div>
     </div>
     <Hello  :msg="tracks" />

  </div>
</template>

<script>
import Hello from "@/components/HelloWorld";

export default {
  name: 'user',
   data () {
    return {
      info: null,
      id:this.$route.params.id,
      followers:null,
      tracks:null,
    }
  },
  components:{
    Hello
  },
    methods:{
     fetchMusic(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/users/${this.id}?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
      .then(response => {this.info = response.data;} )
    },
      fetchFollowers(){
    this.axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/users/${this.id}/followers?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
      .then(response => {this.followers = response.data.collection;} )
    },
    fetchTRacks(){
  this.axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/users/${this.id}/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505`)
    .then(response => {this.tracks = response.data; } )
  }
    },
    created(){
       this.fetchMusic();
       this.fetchFollowers();
       this.fetchTRacks();


    },
    computed:{
     products(){
       return this.$store.state.products
     }
    },
     watch: {
          "$route.params.id"(val) {
           // call the method which loads your initial state
                   window.location.reload()
          },
       },


  }
</script>
<style lang="scss" scoped>
.home{
   width:100%;
   padding:8em;
   padding-top:3em;
    display:grid;
          grid-template-columns:repeat(1,2fr 1fr);
          grid-gap: 20px;
   .user_info{
     width:100%;

     background:#fff;
     padding:1.3em;
     height:auto;
     div{
       text-align:center;
      ul{
        li{
         display:inline-block;
         padding-right:0.5em;
         padding-left:0.5em;

         padding-top:0.6em;
         font-size:1.3em;

        }
      }
      img{
       border-radius:100%;
      }
      h3{
       font-size:2em;
      }
      }
      p{
       padding-top:1em;
       font-size:1.1em;
       line-height:21px;
      }
   }
   .followers{
    height:100%;
    .following{
    overflow-y:scroll;
    height:100vh;
     .follow{
       padding:0.5em;
       position:relative;
       img{
         max-width:20%;
         border-radius:100%;
         display:inline-block;
       }
       span{
         position:absolute;
         margin-top:.5em;
         padding-left:0.5em;
         color:#111;
         &:last-child{
           margin-top:2em;
           color:#333;
         }

       }
     }
    }
   }
}

</style>
