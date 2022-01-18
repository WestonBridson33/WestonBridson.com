<template>
  <section>
    <v-card color="primary darken-4" class="pa-4 mt-6">
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
          width="850"
          height="400"
          :src="activePost.postYoutube"
          frameborder="2"
        ></iframe>
      </div>
      <div v-if="activePost.postLocalVid" class="text-center pb-2">
        <video width="850" height="400" autoplay muted>
          <source :src="activePost.postLocalVid" />
        </video>
      </div>
      <div v-if="activePost.postImage" class="text-center pb-2">
        <img :src="activePost.postImage" width="850" />
      </div>
      <div class="body secondary--text px-9">
        {{ activePost.postText }}
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