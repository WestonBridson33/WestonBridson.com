<template>
  <v-card
    color="secondary--text"
    width="80%"
    class="text-center"
    :class="color"
    :elevation="elevation"
    @mouseenter="hoverEnter"
    @mouseleave="hoverExit"
    @click="click"
  >
    <h3 class="text-h4 py-2">Let There Be Light</h3>
    <iframe
      width="1000"
      height="580em;"
      src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0"
      frameborder="2"
    ></iframe>
    <div class="d-flex justify-center py-4">
      <article>
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
      /* @click gives a nice effect*/
    },
  },
  mounted() {
    this.hoverExit();
  },
}
</script>

<style scoped>
article {
  max-width: 42em;
  font-size: 1.2em;
}
</style>