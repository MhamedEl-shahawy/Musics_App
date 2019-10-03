<template>
  <div class="main_home">
     <div class="home"  v-for="artists in info">
        <div>
         <router-link :to="'/artist/'+artists.id">
                      <img :src="artists.user['avatar_url']" />

           <h3>{{artists.title}}</h3>
           </router-link>
        </div>
      
     </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
   data () {
    return {
      info: null
    }
  },

    methods:{
     fetchMusic(){
    this.axios
      .get('https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505')
      .then(response => {this.info = response.data; console.log(this.info)} )
    }
    },
    created(){
       this.fetchMusic();
       
    },
   
  
  }
</script>
<style lang="scss" scoped>
.main_home{
   width:100%;
   height:100%;
  .home{
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:repeat(5,1fr); 
          grid-gap: 10px;
          div{
           position:relative;
          img{
             border-radius:5px;
             max-width:100%;
             margin-bottom:1em;
          }
          &:after{
               content:"ss";
               position:absolute;
               top:40%;
               z-index:999;
               left:45%;
           }
          }
  }
}
</style>
