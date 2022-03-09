<template>
  <section>
    <!-- mobile -->
    <section v-if="$vuetify.breakpoint.mdAndDown" class="d-flex justify-center">
    <v-card color="primary darken-4" class="px-1 py-4 my-6" :width="$vuetify.breakpoint.smAndDown ? '22.4em' : '50em'" >
      <v-row>
        <v-col cols="2">
          <div class="caption font-weight-light secondary--text">
            {{ activePost.postDate.slice(4, 15) }}
          </div>
        </v-col>
        <v-col class="text-center  mr-16 pb-4 pt-0 secondary--text">
            <h2>{{activePost.postTitle}}</h2>
        </v-col>
      </v-row>

      <div v-if="activePost.postYoutube" class="text-center pb-2">
        <iframe
          style="max-width: 20em;"
          :width="activePost.postWidth"
          height="190"
          :src="activePost.postYoutube"
          frameborder="2"
        ></iframe>
      </div>
      <div v-if="activePost.postLocalVid" class="text-center pb-2">
        <video :width="activePost.postWidth" height="400" autoplay muted controls>
          <source :src="activePost.postLocalVid" />
        </video>
      </div>
      <div v-if="activePost.postImage" class="text-center pb-2">
        <img :src="activePost.postImage" :width="activePost.postWidth" />
      </div>
      <div class="body secondary--text px-7">
        <article style="white-space: normal;">{{ activePost.postText }}</article>
      </div>
    </v-card>
    </section>
    <!-- Desktop -->
    <v-card color="primary darken-4" class="pa-4 mt-6" v-else>
      <v-row>
        <v-col cols="2">
          <div class="caption font-weight-light secondary--text pb-3">
            {{ activePost.postDate.slice(4, 15) }}
          </div>
        </v-col>
        <v-col class="text-center pr-16 mr-16 pb-4 pt-0 secondary--text">
            <h2>{{activePost.postTitle}}</h2>
        </v-col>
      </v-row>

      <div v-if="activePost.postYoutube" class="text-center pb-2">
        <iframe
          :width="activePost.postWidth"
          height="400"
          :src="activePost.postYoutube"
          frameborder="2"
        ></iframe>
      </div>
      <div v-if="activePost.postLocalVid" class="text-center pb-2">
        <video :width="activePost.postWidth" height="400" autoplay muted controls>
          <source :src="activePost.postLocalVid" />
        </video>
      </div>
      <div v-if="activePost.postImage" class="text-center pb-2">
        <img :src="activePost.postImage" :width="activePost.postWidth" />
      </div>
      <div class="body secondary--text px-7">
        <article>{{ activePost.postText }}</article>
      </div>
    </v-card>
  </section>
</template>
<script>
export default {
  props: ["activePost"],
  watch: {
    activePost() {
      console.log(this.activePost.postYoutube);
    },
  },
};
</script>

<style scoped>
#detailed-view-heading {
  font-family: pristina;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.4em;
}
article {
  white-space: pre-line;
}
</style>