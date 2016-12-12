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

const { gimmeSong } = remote.getGlobal('gimmeSong');
const PlayList = require('./PlayList');
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
    loadTrack(index) {
      index = 0;
      const filePath = PlayList[index].filePath;
      gimmeSong(filePath)
        .then(song => {
          document.getElementById('audio-player').src = song;
          return song;
        })
        .catch(err => err);
    },
  },
};
</script>