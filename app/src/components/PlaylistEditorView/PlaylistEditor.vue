<style scoped>

</style>

<template>
  <ul>
    <h1 class='title'>Your Playlist 💖</h1>
    <li v-for='track in playlistTracks'>
      {{track.number}}: {{track.title}} -- {{track.duration}}
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
