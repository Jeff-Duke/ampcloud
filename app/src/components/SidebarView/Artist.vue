<style scoped>
</style>

<template>
  <section>
    <h1><button @click='toggleAlbums'>📂</button> {{artist.name}}</h1>
    <ul>
      <li v-if="show === 'yes'" v-for='(album, index) in artist.albums'>
        {{album.title}}
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  props: ['artist'],
  data() {
    return {
      showKey: {
        no: () => { this.show = 'yes'; },
        yes: () => { this.show = 'no'; },
      },
      show: 'no',
    };
  },
  methods: {
    toggleAlbums() {
      this.showKey[this.show]();
    },
  },
};
</script>
