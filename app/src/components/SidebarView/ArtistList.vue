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
  };
</script>
