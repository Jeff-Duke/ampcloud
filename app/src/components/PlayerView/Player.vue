<style>

</style>

<template>

  <section>

    <button @click='prevTrack'>prevTrack</button>
    <audio id="audio-player" controls="controls" src="">
      <source src="" type="audio/mp3" />
    </audio>
    <input type="file" id="file" />
    <button @click='nextTrack'>nextTrack</button>
    <button @click='loadTrack'>LoadTrack</button>

  </section>
</template>

<script>
  export default {
    methods: {
      nextTrack() {
        console.log('nextTrack');
      },
      prevTrack() {
        console.log('prevTrack');
      },
      loadTrack() {
        require('electron').remote.getGlobal('gimmeSong')((err, song) => {
          document.getElementById('audio-player').src = song.toString();
        });
      },
    },
  };
</script>