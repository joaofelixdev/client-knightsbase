<template>
  <Profile />
  <GitHub />
  <img src="/images/logo.png" alt="Knights Base Logo" class="logo">
  <Pages />
  <router-view/>
</template>
<script>
import Profile from './components/Profile.vue';
import GitHub from './components/Github.vue';
import Pages from './components/Pages.vue';

export default {
  name: 'AppVue',
  components: {
    Profile,
    GitHub,
    Pages,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #8338ec;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>

<style scoped>
.logo {
  width: 400px;
  margin: 80px auto 0px auto;
  display: block;
}
</style>
