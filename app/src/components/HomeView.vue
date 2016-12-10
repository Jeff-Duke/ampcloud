<style scoped>

  .wrapper {
    display: flex;
    width: 100vw;
  }

  .sidebar-container {
    border-right: 1px solid black;
    height: 100vh;
    margin-top: 75px;
    width: 275px;
  }

  .playlist-editor-container {
    margin-left: 5%;
    margin-top: 75px;
  }

</style>

<template>
  <div class='wrapper'>
  <section class='search-bar-container'>
    <search-bar id='search-bar'
    >
  </search-bar>
  </section>
  <section class='sidebar-container'>
    <sidebar id='sidebar'
      :artists='artists'
      :index='index'
      :addToPlaylist='addToPlaylist'
    >
    </sidebar>
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
  import SearchBar from './SearchBarView/SearchBar';


  export default {
    components: {
      Sidebar,
      PlaylistEditor,
      SearchBar
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
