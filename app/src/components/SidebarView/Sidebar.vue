<style scoped>
</style>

<template>
  <ul>
    <li v-for='(artist, index) in artists'>
      <artist
        :artist='artist'
        :addToPlaylist='addToPlaylist'
      >
      </artist>
    </li>
  </ul>
</template>

<script>
import Artist from './Artist';

export default {
  components: {
    Artist,
  },
  props: ['artists', 'addToPlaylist'],
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
