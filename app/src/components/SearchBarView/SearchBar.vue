<style scoped>
</style>

<template>
  <h1>Works</h1>
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
