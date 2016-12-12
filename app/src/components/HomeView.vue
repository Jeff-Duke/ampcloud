<style scoped>

  .wrapper {
    display: flex;
    margin-top: 8%;
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
  <section class='sidebar-container'>
    <sidebar id='sidebar'
      :artists='artists'
      :index='index'
      :addToPlaylist='addToPlaylist'
    ></sidebar>
  </section>
  <section class='playlist-editor-container'>
    <playlist-editor id='playlist-editor'
      :playlistTracks='playlistTracks'
    >
    </playlist-editor>
  </section>
  <section>
    <player></player>
  </section>
  </div>
</template>

<script>
  import helpers from './SidebarView/helpers';
  import Sidebar from './SidebarView/Sidebar';
  import PlaylistEditor from './PlaylistEditorView/PlaylistEditor';
  import Player from './PlayerView/Player';
  import { remote } from 'electron';
  const { PlayList } = remote.getGlobal('gimmeSong');

  export default {
    components: {
      Sidebar,
      PlaylistEditor,
      Player,
    },
    data() {
      return {
        playlistTracks: PlayList,
        artists: helpers.artists,
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
    },
    name: 'home-page',
  };
</script>
