<style scoped>
.playlist-wrapper {
  background-color: #100f14;
  border-right: 4px solid #e0cd3c;
  border-left: 4px solid #e0cd3c;
  height: 488px;
  padding: 290px 0 0 0;
  width: 555px;
}

.playlist {
  border-right: 3px solid #fff6ce;
  border-left: 3px solid #fff6ce;
  overflow: auto;
  height: 487px;
}

ul {
  list-style: none;
}

li {

}

</style>

<template>
  <div class='playlist-wrapper'>
    <section class='playlist'>
    <ul>
      <li v-for='(song, index) in playlistTracks'>
        <button @click='removeTrack(index)'>X</button>
        {{song.artist}} -
        {{song.title}} {{renderDuration(song.duration)}}
      </li>
    </ul>
  </section>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: ['playlistTracks', 'removeTrack'],
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
