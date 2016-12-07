<style scoped>

</style>

<template>
  <playlist></playlist>
</template>

<script>
import Playlist from './Playlist';

export default {
  components: {
    Playlist,
  },
  data() {
    return {
    };
  },
  created() {
    if (process.env.NODE_ENV === 'testing') {
      this.$route = {
        name: 'home-page',
        path: '/home-page',
      };
    }
  },
};
</script>
