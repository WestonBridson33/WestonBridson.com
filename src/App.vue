<template>
  <v-app style="background-color: #454241">
    <ToolBar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from './components/layout/Toolbar.vue';
export default {
  name: 'App',
  components:{
    ToolBar,
  },
  data: () => ({
    //
  }),
};
</script>
