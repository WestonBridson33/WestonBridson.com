<template>
  <section>
    <!-- if sm or larger -->
    <div id="back" v-if="$vuetify.breakpoint.sm || !$vuetify.breakpoint.smAndDown">
      <v-btn :class="$vuetify.breakpoint.smAndDown ? 'back-sm' : 'back'" icon @click="$router.push('/home')"><v-icon large color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
    </div>
    <div id="back" v-else>
      <v-btn class="back-xs" icon @click="$router.push('/home')"><v-icon large color="secondary">mdi-arrow-left-circle-outline</v-icon></v-btn>
    </div>
    <div :class="$vuetify.breakpoint.xs ? 'detailed-view-heading-xs' : 'detailed-view-heading'">
      <h2 class="heading secondary--text">{{ title }}</h2>
    </div>
    <div class="d-flex justify-center py-8" v-if="$vuetify.breakpoint.xs">
      <video controls muted loop width="350" height="180">
        <source :src="source" />
      </video>
    </div>
    <div class="d-flex justify-center" v-else-if="$vuetify.breakpoint.sm">
      <video controls muted loop width="700" height="450">
        <source :src="source" />
      </video>
    </div>
    <div class="d-flex justify-center" v-else>
      <video controls autoplay muted loop width="1000" height="600">
        <source :src="source" />
      </video>
    </div>
    <div class="text-center">
      <v-btn large dark v-if="demoType == 'none'" :disabled="true"
        >No Demo Available</v-btn
      >
      <try-it-out-button
        v-else
        class="button secondary--text"
        @startDemo="newTab"
        >Try it out!</try-it-out-button
      >
    </div>
    <div class="d-flex justify-center">
      <v-card color="primary darken-4" class="pa-4 my-16" elevation="0">
        <article
          v-if="$vuetify.breakpoint.xs"
          id="detailed-view-article-xs"
          class="detailed-view-article-xs secondary--text pa-1"
        >
          {{ text }}
        </article>
        <article
          v-else-if="$vuetify.breakpoint.sm"
          id="detailed-view-article-sm"
          class="detailed-view-article-sm secondary--text pa-1"
        >
          {{ text }}
        </article>
        <article
          v-else
          id="detailed-view-article"
          class="detailed-view-article secondary--text pa-1"
        >
          {{ text }}
        </article>
      </v-card>
    </div>
  </section>
</template>

<script>
import TryItOutButton from "./TryItOutButton.vue";
export default {
  components: {
    TryItOutButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    demoType: {
      type: String,
      required: false,
      default: "none",
    },
  },
  methods: {
    newTab() {
      if (this.demoType == "new-tab") {
        window.open("https://monster-slayer.web.app/#/");
      }
    },
  },
};
</script>

<style>
.detailed-view-heading {
  font-family: pristina;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.4em;
}
.detailed-view-article {
  white-space: pre-wrap;
  max-width: 50em;
  font-family: sitkBanner;
  font-size: 1.5em;
}
.back {
  position: absolute;
  left: 12em;
  top: 3em;
}
.detailed-view-article-sm {
  white-space: pre-wrap;
  max-width: 30em;
  font-family: sitkBanner;
  font-size: 1.5em;
}
.back-sm{
  position: absolute;
  left: 3em;
  top: 3em;
}
.detailed-view-heading-xs{
  font-family: Quintessential;
  font-size: 1.2em;
  text-align: center;
  padding-top: .4em;
}
.detailed-view-article-xs {
  white-space: pre-wrap;
  max-width: 18em;
  font-family: sitkBanner;
  font-size: 1.5em;
}
.back-xs{
  position: absolute;
  left: 1em;
  top: 1em;
}

</style>
