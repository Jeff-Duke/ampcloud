<style scoped>
</style>

<template>
  <ul>
    <li v-for='(artist, index) in artists'>
      <artist
        :artist='artist'
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
