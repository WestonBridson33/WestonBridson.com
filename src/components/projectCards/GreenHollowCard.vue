<template>
    <base-project-card class="d-flex justify-center" :source="require('@/Resources/Videos/GreenHollowDemo.mp4')"
        cardTitle="Green Hollow" :cardText="text" path="/green-hollow-details" :icon1="require('../../assets/cSharpIcon.svg')"
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
        text: `I made this game in one week! You are looking at my first ever game jam! I loved everything about this project. From the design, to the setting, to lessons I learned. ` +
        `I have not done another game jam since as it was pretty mentally draining, but I learned a lot about myself as a developer while ` +
        `working on this. `
    })
}
</script>