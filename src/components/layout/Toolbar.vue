<template>
  <v-card class="toolbar xs" >
    <router-link :to="path" style="text-decoration: none">
      <v-tabs v-model="tab" color="secondary" dark style="min-width: 50em" grow height="9em" :hide-slider="hideSlider">
        <v-tab @click="setPath(items[0].path)" class="d-flex justify-start secondary--text pl-0 " :class="items[0].class" style="min-width: 55em;">
          <v-img
            v-if="items[0].img"
            width="4em"
            height="4em"
            style="max-width: 4em"
            aspect-ratio="16/9"
            src="../../Resources/Images/SaintCard.png"
          ></v-img>
          <strong v-if="items[0].img"><p class="ma-0" style="font-size: 1.2em">{{ items[0].title }}</p></strong>
          <span v-if="!items[0].img" >{{ items[0].title }}</span>
        </v-tab>
        <v-tab @click="setPath(items[1].path)" class="d-flex justify-center secondary--text" :class="items[1].class" style="min-width: 10em;">
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
        class: "pristina"
      },
      {
        id: 1,
        name: "resume",
        title: "Resume",
        path: "/resume",
        img: false,
        class:'Quintessential'
      },
      // {
      //   id: 2,
      //   name: "resume",
      //   title: "Resume",
      //   path: "/resume",
      //   img: false,
      //   class:'Quintessential'
      // },
      // {
      //   id: 3,
      //   name: "aboutMe",
      //   title: "About Me",
      //   path: "/aboutMe",
      //   img: false,
      //   class:'Quintessential'
      // }
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
        // case "/resume":{
        //   this.tab = 2;
        //   break;
        // }
        // case "/aboutMe":{
        //   this.tab = 3;
        //   break;
        // }
        default: {
          this.hideSlider = true;
        }
      }
    }
  },
  mounted(){
    this.manageSlider();
    console.log(this.$route)
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
.Quintessential{
  font-family: "Quintessential";
  font-size: 1.4em;
  text-align: right;
}
</style>