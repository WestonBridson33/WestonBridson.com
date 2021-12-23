<template>
  <v-card
    :color="color"
    :elevation="elevation"
    width="80%"
    height="33em"
    class="text-center secondary--text"
    @mouseenter="hoverEnter"
    @mouseleave="hoverExit"
    @click="click"
  >
    <h3 class="text-h4 pt-4 pb-8">Monster Slayer</h3>
    <v-row>
      <v-col class=" pl-16 d-flex align-start justify-center">
        <article style="max-width: 37em">
          This project was part of a VueJS course on Udemy by Maximillian Schwarzmuller. It was a simple project pretty early in the course.
          I really enjoyed working on it though, so I came back to it after finishing the course to expand on it. This project was mostly
          for fun, but it also really helped me to solidify the more advanced aspects of vue like vuex.
        </article>
      </v-col>
      <v-col>
        <iframe
          width="600"
          height="380em;"
          src="https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0"
          frameborder="2"
        ></iframe>
      </v-col>
    </v-row>
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
    click() {/* @click gives a nice effect*/},
  },
  mounted() {
    this.hoverExit();
  },
};
</script>

<style scoped>
article {
  max-width: 37em;
  font-size: 1.2em;
}
</style>
