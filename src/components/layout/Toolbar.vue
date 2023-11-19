<template>
  <v-card class="toolbar" >
    <router-link :to="path" style="text-decoration: none">
      <v-tabs v-model="tab" color="secondary" dark grow :height="$vuetify.breakpoint.smAndDown ? '5em' : '9em'" :hide-slider="hideSlider">
        <v-tab @click="setPath(items[0].path)" class="secondary--text" :class="$vuetify.breakpoint.smAndDown ? 'pristina-sm' : 'pristina'">
          <v-img
            v-if="items[0].img && !$vuetify.breakpoint.mdAndDown"
            width="4em"
            height="4em"
            style="max-width: 4em"
            aspect-ratio="16/9"
            src="../../Resources/Images/SaintCard.png"
          ></v-img>
          <strong v-if="items[0].img"><p class="ma-0" :style="$vuetify.breakpoint.mdAndDown ? 'font-size: .8em' : 'font-size: 1.2em;' ">{{ items[0].title }}</p></strong>
          <span v-if="!items[0].img" >{{ items[0].title }}</span>
        </v-tab>
        <v-tab @click="setPath(items[1].path)" class="d-flex justify-center secondary--text" :class="$vuetify.breakpoint.smAndDown ? 'quintessential-sm' : 'quintessential'" style="min-width: 10em;" >
          <span v-if="!items[1].img" >{{ items[1].title }}</span>
        </v-tab>
      </v-tabs>
    </router-link>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    path: "",
    tab: null,
    hideSlider: false,
    items: [
      {
        id: 0,
        name: "home",
        title: "Weston E. Bridson",
        path: "/home",
        img: true,
      },
      {
        id: 1,
        name: "resume",
        title: "Resume",
        path: "/resume",
        img: false,
      },
    ]
  }),
  watch:{
    $route(){
      this.manageSlider();
    }
  },
  methods: {
    setPath(path) {
      this.path = path;
    },
    manageSlider(){
      this.hideSlider = false;
      switch(this.$route.path){
        case "/home":{
          this.tab = 0;
          break;
        }
        case "/resume":{
          this.tab = 1;
          break;
        }
        default: {
          this.hideSlider = true;
        }
      }
    }
  },
  mounted(){
    this.manageSlider();
  }
};
</script>


<style scoped>
.toolbar {
  top: 0;
  width: 100%;
}
.pristina {
  font-family: "Pristina";
  font-size: 1.8em;
}
.quintessential{
  font-family: "Quintessential";
  font-size: 1.4em;
  text-align: right;
}
.pristina-sm {
  font-family: "Pristina";
  font-size: 1.2em;
}
.quintessential-sm{
  font-family: "Quintessential";
  font-size: 1em;
  text-align: right;
}
</style>