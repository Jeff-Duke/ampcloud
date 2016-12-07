<style scoped>

  .wrapper {
    display: flex;
    margin-top: 8%;
    width: 100vw;
  }

  .sidebar-container {
    border-right: 1px solid black;
    height: 90vh;
    width: 25vw;
  }

  .playlist-editor-container {
    margin-left: 5%;
  }

</style>

<template>
  <div class='wrapper'>
  <section class='sidebar-container'>
    <sidebar id='sidebar'></sidebar>
  </section>
  <section class='playlist-editor-container'>
    <playlist-editor id='playlist-editor'></playlist-editor>
  </section>
  </div>
</template>

<script>
  import Sidebar from './SidebarView/Sidebar';
  import PlaylistEditor from './PlaylistEditorView/PlaylistEditor';


  export default {
    components: {
      Sidebar,
      PlaylistEditor,
    },
    name: 'home-page',
  };
</script>
