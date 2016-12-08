<style scoped>
</style>

<template>
  <section>
    <h1><button @click='toggleSongs'>📂</button> {{album.title}}</h1>
    <ul>
      <li
        class="track"
        @click='addToPlaylist($event, artistName, album.title)' 
        v-if="show === 'yes'"
        v-for='(track, index) in album.tracks'
      >
        {{track.title}}
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  props: ['album', 'addToPlaylist', 'artistName'],
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
    toggleSongs() {
      this.showKey[this.show]();
    },
  },
};
</script>
