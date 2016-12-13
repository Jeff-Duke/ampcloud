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
const mainProcess = remote.require(path.join(process.cwd(), 'app/electron.js'));
export default {
  props: ['updateCurrentPlaylist', 'playlistTracks'],
  data() {
    return {
      currentSongIndex: 0,
    };
  },
  computed: {
    maxCount() {
      return this.playlistTracks.length - 1;
    },
  },
  methods: {
    openFile() {
      mainProcess.openFile().then((newTrack) => {
        this.updateCurrentPlaylist(newTrack);
      });
    },
    nextTrack() {
      if (this.currentSongIndex === this.maxCount) return null;
      console.log(this.currentSongIndex);
      this.currentSongIndex += 1;
      console.log(this.currentSongIndex);
      return this.loadTrack();
    },
    prevTrack() {
      if (this.currentSongIndex === 0) return null;
      this.currentSongIndex -= 1;
      return this.loadTrack();
    },
    loadTrack() {
      const filePath = this.playlistTracks[this.currentSongIndex].filePath;
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
