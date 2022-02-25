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
      src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0"
      frameborder="2"
    ></iframe>
    <div class="d-flex justify-center py-4">
      <article :style="$vuetify.breakpoint.xs? 'max-width: 20em;' : 'max-width: 42em;'">
        I didn't just love to play games when I was growing up. I was amazed by
        them. They were way more than just a fun pass time for me. The fact that
        someone had built the world I was playing in, then brought that world to
        life with narrative, character dialouge, and music filled me with
        wonder. Then I was placed in that world to experience the story at
        whatever pace I chose through the eyes and actions of the protagonist.
        At a very young age, I began to see games as art. "Let There Be Light"
        is my attempt to tell my own story in the medium that I fell in love
        with as a kid.
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