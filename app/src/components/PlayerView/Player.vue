<style>
nav {
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: grey;
  height: 300px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.player-wrapper {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 270px;
  width: 770px;
}


#audio-player {
  border-radius: 3px;
  font-size: 20px;
  outline: none;
  padding: 6px 0;
  text-indent: 15px;
  width: 100;
}

.player-button {
  margin-top: 50px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>

<template>
<nav>
  <div class='player-wrapper'>
  <section class='audio-wrapper'>
    <audio id="audio-player" controls="controls" src="">
      <source src="" type="audio/mp3" />
    </audio>
  </section>
  <section class='button-wrapper'>
    <button class='player-button' @click='prevTrack'>prevTrack</button>
    <button class='player-button' @click='nextTrack'>nextTrack</button>
    <button class='player-button' @click='openFile'>OpenFile</button>
  </section>
  <div>
</nav>
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
