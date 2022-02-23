<template>
  <base-project-card
    class="d-flex justify-center"
    :source="require('@/Resources/Videos/TownBuilderDungeonExplorer.mp4')"
    cardTitle="Town Builder"
    :cardText="text"
    path="/town-builder-details"
    :icon1="require('../../assets/cSharpIcon.svg')"
    :icon2="require('../../assets/unity3d-icon.svg')"
  ></base-project-card>
</template>
<script>
import BaseProjectCard from "./BaseProjectCard.vue";
export default {
  components: {
    BaseProjectCard,
  },
  data: () => ({
    text: `
      This was the first time in game development that I closed the youtube tutorials to just see what I could do. However, I had no plan and no clear definition 
      for what this game was. As a result, I fell victim to a concept known as "scope creep." After introducing a game breaking bug that I was unable to find a fix for, I decided I needed more experience before tackling 
      something of this scale. However, I was very impressed with how much I was able to accomplish and this gave me the confidence I would need on future projects. 
    `
  })
};
</script>
