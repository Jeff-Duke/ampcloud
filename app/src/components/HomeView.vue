<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <artist-list><artist-list>
  </div>
</template>

<script>
  import ArtistList from './SidebarView/ArtistList';

  export default {
    components: {
      ArtistList,
    },
    name: 'home-page',
  };
</script>
