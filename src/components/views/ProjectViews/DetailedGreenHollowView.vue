<template>
    <base-detailed-project-view title="Green Hollow" isYoutubeVideo source="https://www.youtube.com/embed/oRDmIZT9H9s?si=bQgdyXkHMpaIEXti&loop=1&controls=1&autoplay=1&mute=1"
        demoType="download" :text="formattedText"></base-detailed-project-view>
</template>

<script>
import BaseDetailedProjectView from "../../UI/BaseDetailedProjectView.vue";
export default {
    components: {
        BaseDetailedProjectView,
    },
    data: () => ({
        formattedText: `
        \t\tIn February of 2023, I decided to take a short break from developing Let There Be Light and participate in the Brackeys Game Jam 2023.1. This was my ` +
        `first game jam and I was equally nervous and excited. We had one week to make a game under the theme of "An End is a New Beginning." The jam started early in the morning ` +
        `of Sunday February 12th 2023. I wasted no time getting started and began to brain storm right away. Eventually, I came up with the idea for Green Hollow.

        I decided to satisfy the theme through the setting and story of the game. The premise was that small creatures were living in an old pine tree that was nearing the end ` +
        `of its life. Due to some natural disasters in the past, their pine tree was the last one remaining in the local area and only one pine cone remained at the top of the tree. ` +
        `The player's goal would be to reach the pine cone and use it to grow a new tree that the creatures could live in. 

        Since I had mainly focused on the setting and story so far, I decided to start development by working on some artwork for the player character. This was different for me ` +
        `as I usually would try to nail down the game's mechanics first. But seeing the player character come to life right out of the gate really got me excited to bring the whole ` +
        `vision together. For the sake of time, I decided to build the controls very similarly to Let There Be Light. As for the combat, I made a simple three round burst attack  ` +
        `where the player character throws dead pine needles. The enemies had the same attack with a static cool down.

        After movement and combat were finished, the next thing to tackle was level building. I was very excited for this as this would be the first time I had reached this point ` +
        `in a game's development cycle since my first few tutorial game projects. I tried my best to build the levels in a way that felt like the player was climbing up to the ` + 
        `top of the tree, while also making the climb interesting with a mix of combat segments and fun platforming segments. Visually, I used clumps of pine needs to obscure the  ` +
        `player's view a bit to give the feeling of being in a dense pine tree. After that, all that was left was to slap together some cut scenes to explain the story to the player.

        And just like that, a week had passed and a brand new game had been completed! I couldn't believe how much fun I had working on this game. The story and setting of a game ` +
        `have always been what draws me in the most. Since most of the game play features had already been fleshed out in Let There Be Light, I got to really focus on those story telling ` +
        `aspects of the game. And it really re-awakened my passion for game development. 

        Unfortunately, I had some technical issues when I tried to submit the game, so I was not considered in the scoring of the game jam. But I still got to have people play the ` +
        `game and leave their feedback, which was a great experience. Lastly, I created a dev log of my experience and posted it to YouTube. It turned out very well and I love that I ` +
        `can relive my first game jam through that video. Feel free to give the video a watch above, or view the download page to try Green Hollow out for yourself!
        `,
    })
}
</script>