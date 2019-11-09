<template>
  <div>
  <div class="related_tracks">
    <div class="track" v-for="track in msg">
       <router-link :to="'/artist/'+track.id">
            <img  :src="track.artwork_url ?  track.artwork_url : track['user'].avatar_url" />
               <h3>{{track.title}}</h3>
        </router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
</style>
