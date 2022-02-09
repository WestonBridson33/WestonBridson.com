<template>
<router-link :to="path" style="text-decoration: none" class="pb-16">
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
    <h3 class="text-h4 pt-4 pb-8">{{ cardTitle }}</h3>
    <v-row class="pr-9">
      <v-col class="pl-16 d-flex align-start justify-center">
        <article style="max-width: 37em" class="pt-10">
          {{ cardText }}
        </article>
      </v-col>
      <v-col>
        <video v-if="isVideo" width="540" height="380" autoplay muted>
          <source :src="source" />
        </video>
      </v-col>
    </v-row>
  </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true,
    },
    isVideo: {
      type: Boolean,
      required: false,
      default: true,
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardText: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    }
  },
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
};
</script>

<style scoped>
article {
  max-width: 37em;
  font-size: 1.2em;
}
</style>
