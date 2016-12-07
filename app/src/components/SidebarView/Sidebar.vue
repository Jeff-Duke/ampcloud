<style scoped>

</style>

<template>
  <artist-list
    :artists='artists'
    :active='active'
    :showAlbums='showAlbums'
    :hideAlbums='hideAlbums'
  >
  </artist-list>
</template>

<script>
import ArtistList from './ArtistList';
import helpers from './helpers';

export default {
  components: {
    ArtistList,
  },
  data() {
    return {
      artists: helpers.artists,
    };
  },
  created() {
    if (process.env.NODE_ENV === 'testing') {
      this.$route = {
        name: 'home-page',
        path: '/home-page',
      };
    }
  },
};
</script>
