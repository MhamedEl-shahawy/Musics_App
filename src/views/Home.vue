<template>
  <div class="home">
    <Spinner v-if="loading" />
    <Musics load="done" v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Spinner from '@/components/Spinner.vue'
import Musics from '@/components/Musics.vue'

export default {
  name: 'home',
  components: {
    Musics,Spinner
  },
  data () {
    return {
      loading:true,
    }
  },
  mounted(){
    let self = this;
    setTimeout(function() {
      self.$nextTick(function() {
        self.loading = false;
      })

    }, 2000);
  }
}
</script>
