<style scoped>

</style>

<template>
  <ul>
    <h1 class='title'>Your Playlist 💖</h1>
    <li v-for='song in playlistTracks'>
      Artist: {{song.artist}} Album: {{song.album}}:
      {{song.track.title}} -- {{song.track.duration}}
    <li>
  </ul>
</template>

<script>

export default {
  components: {
  },
  props: ['playlistTracks'],
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
