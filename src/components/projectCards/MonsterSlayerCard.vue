<template>
  <base-project-card 
    class="d-flex justify-center"
    :source="require('@/Resources/Videos/MonsterSlayer.mp4')"
    cardTitle="Monster Slayer"
    cardText="This project was part of a VueJS course on Udemy by Maximillian
          Schwarzmuller. It was a simple project pretty early in the course. I
          really enjoyed working on it though, so I came back to it after
          finishing the course to expand on it. This project was mostly for fun,
          but it also really helped me to solidify the more advanced aspects of
          vue like vuex."
    path="/monster-slayer-details"
   ></base-project-card>
</template>
<script>
import BaseProjectCard from "./BaseProjectCard.vue";
export default {
  components: {
    BaseProjectCard,
  },
}
</script>
  