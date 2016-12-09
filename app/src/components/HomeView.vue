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
  </div>
</template>

<script>
  import helpers from './SidebarView/helpers';
  import Sidebar from './SidebarView/Sidebar';
  import PlaylistEditor from './PlaylistEditorView/PlaylistEditor';


  export default {
    components: {
      Sidebar,
      PlaylistEditor,
    },
    data() {
      return {
        playlistTracks: [],
        artists: helpers.artists,
      };
    },
    methods: {
      findTrack(e, artistName, albumTitle) {
        const trackTitle = e.target.innerText;
        return this
          .artists.find(artist => artist.name === artistName)
          .albums.find(album => album.title === albumTitle)
          .tracks.find(track => track.title === trackTitle);
      },
      addToPlaylist(e, artistName, albumTitle) {
        const track = this.findTrack(e, artistName, albumTitle);
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
