<style scoped>
.playlist-wrapper {
  background-color: #100f14;
  border-right: 4px solid #e0cd3c;
  border-left: 4px solid #e0cd3c;
  height: 488px;
  padding: 290px 0 0 0;
  width: 477px;
}

.playlist {
  border-right: 3px solid #fff6ce;
  border-left: 3px solid #fff6ce;
  overflow-x: auto;
  height: 488px;
}

.removeTrack {
  border-radius: 100%; /* FF3.6-15 */
  background: -webkit-linear-gradient(#4c4c4c 0%, #595959 12%, #666666 25%, #474747 39%, #2c2c2c 50%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%);
  background: -o-linear-gradient(#4c4c4c 0%, #595959 12%, #666666 25%, #474747 39%, #2c2c2c 50%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%);
  background: linear-gradient(#4c4c4c 0%, #595959 12%, #666666 25%, #474747 39%, #2c2c2c 50%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%); /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  color: #0ac501;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=0 );
}

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}

li {
  margin: 7px;
}

</style>

<template>
  <div class='playlist-wrapper'>
    <section class='playlist'>
    <ul>
      <li v-for='(song, index) in playlistTracks'>
        <button @click='removeTrack(index)' class='removeTrack'>X</button>
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
