<template>
  <section>
    <section class="pb-5">
      <div class="heading secondary--text">
        <h1>Dev-Log</h1>
      </div>
      <div class="secondary" style="min-height: 0.3em; min-width: 0.3em"></div>
    </section>
    <section class="px-16 mx-16">
      <v-row>
        <v-col>
          <v-timeline dense align-top>
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
        <v-col>
          <dev-log-post-content :activePost="activePost"></dev-log-post-content>
        </v-col>
      </v-row>
    </section>
  </section>
</template>

<script>
import DevLogPostCard from "../UI/DevLogPostCard.vue";
import DevLogPostContent from "../UI/DevLogPostContent.vue";
export default {
  components: {
    DevLogPostCard,
    DevLogPostContent,
  },
  data: () => ({
    interval: null,
    activePost: {},
    items: [
      {
        id: "0",
        postDate: new Date("1/16/2022").toString(),
        postTitle: "Text",
        postText: "lorem",
        postImage: "",
        postYoutube: "",
        postLocalVid: "",
      },
      {
        id: "1",
        postDate: new Date("1/14/2022").toString(),
        postTitle: "PlantingBushes!",
        postText: "Planting Bushes!",
        postImage: require("@/Resources/Images/plantingBushes.jpg"),
        postYoutube: "",
        postLocalVid: "",
      },
      {
        id: "2",
        postDate: new Date("1/15/2022").toString(),
        postTitle: "Let There Be Light Demo",
        postText: "a youtube video",
        postImage: "",
        postYoutube: "https://www.youtube.com/embed/6JUUDjMevVg?autoplay=1&mute=1&playlist=6JUUDjMevVg&loop=1&controls=0",
        postLocalVid: "",
      },
      {
        id: "3",
        postDate: new Date("1/17/2022").toString(),
        postTitle: "Monster Slayer Demo!",
        postText: "A local vid",
        postImage: "",
        postYoutube: "",
        postLocalVid: require("@/Resources/Videos/MonsterSlayer.mp4"),
      },
    ],
  }),

  methods: {
    getDate(date) {
      return new Date(date);
    },
    setActivePost(id) {
      const arr = this.items.filter((item) => item.id == id);
      this.activePost = arr[0];
    },
  },
  mounted() {},
};
</script>
<style scoped>
.heading {
  font-family: pristina;
  font-size: 3.5em;
  text-align: center;
  padding-top: 0.1em;
}
</style>