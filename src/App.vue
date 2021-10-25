<template>
  <v-app>
    <Toolbar />

    <v-main class="primary darken-3">
      <router-view></router-view>
    </v-main>
    
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from './components/layout/Toolbar.vue';
import Footer from './components/layout/Footer.vue';
export default {
  name: 'App',

  components: {
    Toolbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
