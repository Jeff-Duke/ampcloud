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
    <button @click='openFile'>OpenFile</button>

  </section>
</template>

<script>
import { remote } from 'electron';
import path from 'path';
const mainProcess = remote.require(path.join(process.cwd(), 'app/electron.js'));
export default {
  methods: {
    openFile() {
      mainProcess.openFile();
    },
    nextTrack() {
    },
    prevTrack() {
    },
    loadTrack() {
      require('electron').remote.getGlobal('gimmeSong')((err, song) => {
        document.getElementById('audio-player').src = song;
      });
    },
  },
};
</script>