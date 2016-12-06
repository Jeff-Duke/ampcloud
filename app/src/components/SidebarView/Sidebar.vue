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
import ArtistList from './ArtistList.vue';

export default {
  components: {
    ArtistList,
  },
  data() {
    return {
      active: false,
      artists: [
        {
          name: 'Kanye',
          albums: [
            'College Dropout',
            'Late Registration',
            'Graduation',
          ],
        },
        {
          name: 'Young Thug',
          albums: [
            'Slime Season',
            'Slime Season 2',
            'Slime Season 3',
          ],
        },
        {
          name: '21 Savage',
          albums: [
            'The Slaughter Tape',
            'Savage Mode',
          ],
        },
      ],
    };
  },
  methods: {
    showAlbums() {
      this.active = true;
    },
    hideAlbums() {
      this.active = false;
    },
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
