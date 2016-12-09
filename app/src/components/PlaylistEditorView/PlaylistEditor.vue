<style scoped>

</style>

<template>
  <div>
  <h1 class='title'>Your Playlist 💖</h1>
  <ul>
    <li v-for='song in playlistTracks'>
      <b>Artist:</b> {{song.artist}} <b>Album:</b> {{song.album}}:
      {{song.track.title}} -- {{renderDuration(song.track.duration)}}
    </li>
  </ul>
</div>
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
  methods: {
    renderDuration(duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;

      if (seconds < 10) return `${minutes}:0${seconds}`;
      return `${minutes}:${seconds}`;
    },
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
