<template>
  <v-card class="toolbar">
    <router-link :to="path" style="text-decoration: none">
      <v-tabs v-model="tab" color="secondary" dark style="min-width: 50em" grow height="8em" :hide-slider="hideSlider">
        <v-tab v-for="item in items" :key="item.id" @click="setPath(item.path)" class="pristina secondary--text pl-0 pr-10">
          <v-img
            v-if="item.img"
            width="4em"
            height="4em"
            style="max-width: 4em"
            aspect-ratio="16/9"
            src="../../Resources/Images/SaintCard.png"
          ></v-img>
          <strong v-if="item.img"><p class="ma-0" style="font-size: 1.2em">{{ item.title }}</p></strong>
          <span v-if="!item.img" >{{ item.title }}</span>
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
        name: "devLog",
        title: "Dev-Log",
        path: "/dev-log",
        img: false,
      },
      {
        id: 2,
        name: "resume",
        title: "Resume",
        path: "/resume",
        img: false,
      },
      {
        id: 3,
        name: "aboutMe",
        title: "About Me",
        path: "/aboutMe",
        img: false,
      }
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
        case "/dev-log":{
          this.tab = 1;
          break;
        }
        case "/resume":{
          this.tab = 2;
          break;
        }
        case "/aboutMe":{
          this.tab = 3;
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
  font-size: 1.7em;
}
</style>