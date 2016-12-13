<style scoped>

  .wrapper {
    display: flex;
    width: 100vw;
  }

  .sidebar-container {
    border-right: 1px solid black;
    height: 100vh;
    width: 275px;
  }

  .playlist-editor-container {
    margin-left: 5%;
  }

</style>

<template>
  <div class='wrapper'>
    <section class='player-container'>
      <player
      :updateCurrentPlaylist='updateCurrentPlaylist'
      :playlistTracks='playlistTracks'
      >
      </player>
    </section>
    <section class='playlist-editor-container'>
      <playlist-editor id='playlist-editor'
        :playlistTracks='playlistTracks'
        :removeTrack='removeTrack'
      >
      </playlist-editor>
    </section>
  </div>
</template>

<script>
  import PlaylistEditor from './PlaylistEditorView/PlaylistEditor';
  import Player from './PlayerView/Player';
  import { remote } from 'electron';
  const { PlayList } = remote.getGlobal('gimmeSong');

  export default {
    components: {
      PlaylistEditor,
      Player,
    },
    created() {
      const localData = localStorage.playlist;
      if (localData) return this.playlistTracks = JSON.parse(localData);
      localStorage.playlist = JSON.stringify(this.playlistTracks);
      return null;
    },
    data() {
      return {
        playlistTracks: [],
      };
    },
    methods: {
      addToPlaylist(e, artistName, albumTitle) {
        const trackTitle = e.target.innerText;
        const artist = this.artists.find(artist => artist.name === artistName);
        const album = artist.albums.find(album => album.title === albumTitle);
        const track = album.tracks.find(track => track.title === trackTitle);
        const song = {
          artist: artistName,
          album: albumTitle,
          track };

        this.playlistTracks = [...this.playlistTracks, song];
      },
      updateCurrentPlaylist(newTrack) {
        this.playlistTracks = [...this.playlistTracks, newTrack];
        localStorage.playlist = JSON.stringify(this.playlistTracks)
      },
      removeTrack(index) {
        this.playlistTracks = this.playlistTracks.filter((e, i) => i !== index);
        localStorage.playlist = JSON.stringify(this.playlistTracks);
      },
    },
    name: 'home-page',
  };
</script>
