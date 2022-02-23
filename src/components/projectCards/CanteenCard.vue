<template>
  <base-project-card 
    class="d-flex justify-center"
    :source="require('@/Resources/Videos/ASimplifiedCanteen.mp4')"
    cardTitle="A Simplified Canteen"
    cardText="Here is my first practice project ever. This is the first time I ever wrote code that was not for an assignment. The
    goal here was just to see what I could create without the guidance of my professors. It's nothing special. In fact, its a bit of
    an eye sore. But this was where I really started to see that I had some potential as a programmer"
    path="/canteen-view-details"
    :icon1="require('../../assets/java-icon.svg')"
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