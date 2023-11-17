<template>
<router-link to="/let-there-be-light-details" style="text-decoration: none; min-width: 80%;" >
  <v-card
    color="secondary--text"
    width="100%"
    class="text-center"
    :class="color"
    :elevation="elevation"
    @mouseenter="hoverEnter"
    @mouseleave="hoverExit"
    @click="click"
  >
  <v-row class="d-flex">
    <v-col class="card-icons" cols="1" v-if="!$vuetify.breakpoint.smAndDown">
       <v-img  class="mt-6 ml-7" src="../../assets/cSharpIcon.svg" width="2.5em" height="3.5em"></v-img><v-img class="mt-6 ml-9" src="../../assets/unity3d-icon.svg" width="3.5em" height="3.5em"></v-img>
    </v-col>
    <v-col>
      <h3 class="text-h4 py-2">Let There Be Light</h3>
    </v-col>
  </v-row>
    <iframe
    v-if="!$vuetify.breakpoint.mdAndDown"
      width="1000"
      height="580em;"
      src="https://www.youtube.com/embed/a50JzYFBADs?si=v9ChvNdS9B0OloEK&loop=1&controls=1&autoplay=1&mute=1"
      frameborder="2"
    ></iframe>
    <div class="d-flex justify-center py-4">
      <article :style="$vuetify.breakpoint.xs? 'max-width: 18em;' : 'max-width: 42em;'">
        {{text}}
      </article>
    </div>
  </v-card>
</router-link>
</template>

<script>
export default {
   data: () => ({
    elevation: 14,
    color: "",
    text: `Here is my first attempt at real start to finish indie game development! I started this project with a lot of passion and ambition, but the project suffered from a lack of focus. ` +
      `eventually the game had spiraled into something I no longer connected with. But despite the disorganization and confusion, I still managed to pull something together and release a game ` +
      `that I am proud of.`
  }),
  methods: {
    hoverEnter() {
      this.elevation = 22;
      this.color = "hover";
    },
    hoverExit() {
      this.elevation = 14;
      this.color = "primary darken-4";
    },
    click() {
      this.$store.commit('setScrollPosY', window.scrollY);
      window.scrollTo(0,0);
    },
  },
  mounted() {
    this.hoverExit();
  },
}
</script>

<style scoped>
.card-icons{
  display: flex;
  position: absolute;
  left: 4em;
  top: -1.5em;
}
article {
  max-width: 42em;
  font-size: 1.2em;
}
</style>