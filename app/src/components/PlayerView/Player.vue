<style>

</style>

<template>

  <section>

    <audio id="audio-player" controls="controls" src="">
      <source src="" type="audio/mp3" />
    </audio>
    <button @click='prevTrack'>prevTrack</button>
    <button @click='nextTrack'>nextTrack</button>
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
  mounted() {
    if (this.playlistTracks.length) {
      this.loadTrack();
    }
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
      this.currentSongIndex += 1;
      this.loadTrack();
      return this.playTrack();
    },
    prevTrack() {
      if (this.currentSongIndex === 0) return null;
      this.currentSongIndex -= 1;
      this.loadTrack();
      return this.playTrack();
    },
    playTrack() {
      document.getElementById('audio-player').autoplay = true;
    },
    loadTrack() {
      const filePath = this.playlistTracks[this.currentSongIndex].filePath;
      const audioPlayer = document.getElementById('audio-player');
      gimmeSong(filePath)
        .then(song => {
          audioPlayer.src = song;
          audioPlayer.onended = () => {
            this.nextTrack();
          }
          return song;
        })
        .catch(err => err);
    },
  },
};
</script>
