<style scoped>

</style>

<template>
  <h1>Working</h1>
</template>

<script>

export default {
  components: {
  },
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
