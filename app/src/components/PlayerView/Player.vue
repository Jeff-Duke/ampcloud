<style>
nav {
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #202020;
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
  border: 7px solid #3b385e;
  border-radius: 3px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #100f14;
  height: 260px;
  width: 765px;
}

.title {
  margin-top: 0;
  font-size: 40px;
  text-align: center;
}

#audio-player {
  border-radius: 3px;
  font-size: 20px;
  outline: none;
  padding: 0;
  text-indent: 15px;
  width: 300px;
}

.player-button {
  margin-top: 50px;
  margin-right: 10px;
  margin-left: 10px;
}

.previous {
  background: url("../../images/previous-track.png") no-repeat scroll 0 0 transparent;
  border:none;
  cursor: pointer;
  height: 50px;
  width: 50px;
}

.next {
  background: url("../../images/next-track.png") no-repeat scroll 0 0 transparent;
  border:none;
  cursor: pointer;
  height: 50px;
  width: 50px;
}

.open {
  background: url("../../images/sphere-search.png") no-repeat scroll 0 0 transparent;
  border:none;
  cursor: pointer;
  height: 50px;
  width: 50px;
}

</style>

<template>
<nav>
  <div class='player-wrapper'>
    <h1 class='title'>AMPTRON</h1>
  <section class='audio-wrapper'>
    <audio id="audio-player" controls="controls" src="">
      <source src="" type="audio/mp3" />
    </audio>
  </section>
  <section class='button-wrapper'>
    <button class='player-button previous' @click='prevTrack'></button>
    <button class='player-button next' @click='nextTrack'></button>
    <button class='player-button open' @click='openFile'></button>
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
        if (newTrack) {
        this.updateCurrentPlaylist(newTrack);
        }
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
