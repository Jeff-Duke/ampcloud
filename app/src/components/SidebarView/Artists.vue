<style scoped>
</style>

<template>
  <ul v-if='active'>
    <li v-for='(artist, index) in artists'>
      <h3 @click='hideAlbums()'>{{artist.name}}<h3>
        <ul class='album'>
          <li v-for='(album, index) in artist.albums'>
            {{album}}
          </li>
        </ul>
    </li>
  </ul>

  <ul v-else>
    <li v-for='(artist, index) in artists'>
      <h3 @click='showAlbums()'>{{artist.name}}<h3>
    </li>
  </ul>
</template>

<script>

  export default {
    props: ['artists', 'active', 'showAlbums', 'hideAlbums'],
  };
</script>
