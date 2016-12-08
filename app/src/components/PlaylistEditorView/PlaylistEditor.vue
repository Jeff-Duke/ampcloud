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
      const durationInSeconds = parseInt(duration, 10);
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = durationInSeconds - (minutes * 60);
      let time;

      if (seconds < 10) { time = `${minutes}:0${seconds}`; }
      if (seconds > 10) { time = `${minutes}:${seconds}`; }

      return time;
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
