<template>
  <section>
    <div id="detailed-view-heading">
      <h2 class="heading secondary--text">{{ title }}</h2>
    </div>
    <div class="d-flex justify-center">
      <video autoplay muted loop width="1000" height="600">
        <source :src="source" />
      </video>
    </div>
    <div class="text-center">
      <v-btn large dark v-if="demoType == 'none'" :disabled=true>No Demo Available</v-btn>
      <try-it-out-button v-else class="button secondary--text" @startDemo="newTab">Try it out!</try-it-out-button>
    </div>
    <div class="d-flex justify-center">
      <article id="detailed-view-article" class="detailed-view-article text-center secondary--text py-16">
        {{ text }}
      </article>
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
      default: 'none',
    },
  },
  methods: {
    newTab(){
      if(this.demoType == "new-tab"){
        window.open("https://monster-slayer.web.app/#/");
      }
      
    }
  }
};
</script>

<style>
#detailed-view-heading {
  font-family: pristina;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.4em;
}
#detailed-view-article {
  white-space: pre;
  max-width: 55%;
}
</style>
