<template>
  <div class="home">
    <Musics load="done" />
  </div>
</template>

<script>
// @ is an alias to /src
import Musics from '@/components/Musics.vue'

export default {
  name: 'home',
  components: {
    Musics
  }
}
</script>
