export default [
  {
    path: '/',
    name: 'home-page',
    component: require('components/HomeView'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
