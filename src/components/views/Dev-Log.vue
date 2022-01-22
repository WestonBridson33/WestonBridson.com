<template>
  <section class="pb-8">
    <section class="pb-5">
      <div class="heading secondary--text">
        <h1>Dev-Log</h1>
      </div>
      <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
    </section>
    <section class="px-16 mx-16">
      <v-row>
        <v-col>
          <v-timeline class="timeline" dense align-top>
            <v-slide-x-reverse-transition group hide-on-leave>
              <v-timeline-item
                v-for="item in items"
                :key="item.id"
                :color="'secondary'"
                small
                fill-dot
              >
                <dev-log-post-card
                  :id="item.id"
                  :date="item.postDate"
                  :title="item.postTitle"
                  :image="item.postImage"
                  :youtube="item.postYoutube"
                  :localVid="item.postLocalVid"
                  @selected="setActivePost"
                ></dev-log-post-card>
              </v-timeline-item>
            </v-slide-x-reverse-transition>
          </v-timeline>
        </v-col>
        <v-col class="content">
          <dev-log-post-content v-if="!!activePost.id" :activePost="activePost"></dev-log-post-content>
          <div v-else class="placeholder"><h3><v-icon large color="primary">mdi-text-box-outline</v-icon></h3></div>
        </v-col>
      </v-row>
    </section>
  </section>
</template>

<script>
import DevLogPostCard from "../UI/DevLogPostCard.vue";
import DevLogPostContent from "../UI/DevLogPostContent.vue";
import { items } from "../../DevLogPosts.js";
export default {
  components: {
    DevLogPostCard,
    DevLogPostContent,
  },
  data: () => ({
    interval: null,
    activePost: {},
  }),
  computed: {
    items(){
      if(items[0].id == 0){
        return items.reverse();
      } else {
        return items;
      }
      
    }
  },
  methods: {
    getDate(date) {
      return new Date(date);
    },
    setActivePost(id) {
      const arr = this.items.filter((item) => item.id == id);
      this.activePost = arr[0];
    },
  },
  mounted() { console.log(this.activePost) },
};
</script>
<style scoped>
.heading {
  font-family: pristina;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.1em;
}
.timeline{
  max-height: 53em;
  border-style: solid;
  border-color: #827717;
  border-width: 1px;
  overflow-y: scroll;
}
.content{
  max-height: 53em;
  border-style: solid;
  border-color: #827717;
  border-width: 1px;
  overflow-y: scroll;
  margin-top: .8em;
}
.placeholder{
  margin-top: 50%;
  text-align: center;
}
</style>