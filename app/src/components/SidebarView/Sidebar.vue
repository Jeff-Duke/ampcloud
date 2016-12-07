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

export default {
  components: {
    ArtistList,
  },
  props: ['artists'],
  data() {
    return {
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
