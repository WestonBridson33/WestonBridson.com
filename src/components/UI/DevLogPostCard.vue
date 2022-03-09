<template>
<section>
  <!-- smAndDown -->
  <v-card v-if="$vuetify.breakpoint.smAndDown" color="primary darken-4" @click="setActivePost" class="pa-1 mr-16">
    <div class="caption font-weight-light secondary--text pb-4">
      {{ date.slice(4, 15) }}
    </div>
    <div v-if="youtube" class="text-cetner pb-2">
      <iframe
        width="190"
        height="100"
        :src="youtube"
        frameborder="2"
      ></iframe>
    </div>
    <div v-if="image" class="text-center pb-2 border">
      <img :src="image" width="190" />
    </div>
    <div class="body secondary--text px-9">
      {{ title }}
    </div>
  </v-card>
  <!-- Desktop -->
  <v-card v-else color="primary darken-4" @click="setActivePost" class="pa-4 mr-16">
    <div class="caption font-weight-light secondary--text pb-4">
      {{ date.slice(4, 15) }}
    </div>
    <div v-if="youtube" class="text-cetner pb-2">
      <iframe
        width="400"
        height="100"
        :src="youtube"
        frameborder="2"
      ></iframe>
    </div>
    <div v-if="image" class="text-center pb-2">
      <img :src="image" width="250" />
    </div>
    <div class="body secondary--text px-9">
      {{ title }}
    </div>
  </v-card>
</section>
  
</template>
<script>
export default {
  props: {
    youtube: {
      type: String,
      required: false,
      default: "",
    },
    localVid: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  emits: ["selected"],
  methods: {
    setActivePost() {
      this.$emit("selected", this.id);
    },
  },
};
</script>

<style scoped>
.border{
  border-style: solid;
  border-width: 1px;
  border-color: gray;
}
</style>