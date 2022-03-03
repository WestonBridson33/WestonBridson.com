<template>
    <base-detailed-project-view
        title="Town Builder"
        :source="require('@/Resources/Videos/TownBuilderDungeonExplorer.mp4')"
        :text="$vuetify.breakpoint.smAndDown ? text : formattedText"
    ></base-detailed-project-view>
</template>

<script>
import BaseDetailedProjectView from "../../UI/BaseDetailedProjectView.vue";
export default {
    components:{
        BaseDetailedProjectView,
    },
    data: () => ({
        formattedText: `
        \tAt the time of this project's creation, I had only ever practiced game development by following along with youtube 
        tutorials. I decided to put my skills to the test and see what I had learned. As I thought about what type of game I 
        wanted to create, I thought about my favorite aspects of games that I had played. I wanted my game to have the ability 
        to explore, fight bosses, level up, and use gathered materials to make visible upgrades to something. From these goals, 
        the one I was most concerned about was "making visible upgrades to something." I wanted the ability to craft and 
        upgrade armor, but when doing research on how to create this functionality, it proved to be more work than I was 
        ready for. So, I thought instead it would be fun to create and upgrade buildings. And that's the story of how "2D Town 
        Builder Dungeon Explorer" was born (or "Town Builder" for short).
            
        Besides that initial brain storm, no planning went into this project at all. I would sit down, think of something that 
        could be added to the game, and start working on creating that thing. Due to that lack of planning, this project was 
        very vulnerable to scope creep (changes, continuous or uncontrolled growth in a project’s scope). This was the first 
        time I experienced this in such a noticeable way. I remember being in the middle of creating an asset and thinking to 
        myself "Why am I creating this again?" Before long, this project became very overwhelming and frustrating. After 
        introducing a game breaking bug and being unable to resolve the issue, I decided I needed more experience before 
        attempting something of this scale. 

        Despite how it sounds, this project was not a total disaster. I created my first playable character and my first enemies 
        with animations and attacks. The player had a fully functioning inventory system. There were shops where the player 
        could buy potions, weapons and buildings. Buying a weapon or potion would add your purchase to your inventory. 
        Clicking the weapon would equip it and allow you to attack with it, while clicking the potion would allow you to heal 
        and consume the potion. Buying a building would switch the game's camera to the build camera, and switch the games 
        controls to build controls. The player could choose a location in a restricted area to place a building which he could 
        later upgrade. All of this stuff worked almost as well as I imagined. Sadly I eventually introduced a bug that broke 
        the build camera. This was the bug that discouraged me from continuing the project. But I was still really impressed 
        with how far I had come, and I had learned a really valuable, lesson about the importance of project planning. 

        I currently have no plans to revive the project, but I am super proud of this one. I think some day, maybe with a small 
        team, I would like to come back and see where I can take this idea. 
        `,

        text: "\tAt the time of this project's creation, I had only ever practiced game development by following along with youtube tutorials. I decided to put my skills to the test and see what I had learned. As I thought about what type of game I wanted to create, I thought about my favorite aspects of games that I had played. I wanted my game to have the ability to explore, fight bosses, level up, and use gathered materials to make visible upgrades to something. From these goals, the one I was most concerned about was \"making visible upgrades to something.\" I wanted the ability to craft and upgrade armor, but when doing research on how to create this functionality, it proved to be more work than I was ready for. So, I thought instead it would be fun to create and upgrade buildings. And that's the story of how \"2D Town Builder Dungeon Explorer\" was born (or \"Town Builder\" for short).\n\n " +
        "\tBesides that initial brain storm, no planning went into this project at all. I would sit down, think of something that could be added to the game, and start working on creating that thing. Due to that lack of planning, this project was very vulnerable to scope creep (changes, continuous or uncontrolled growth in a project’s scope). This was the first time I experienced this in such a noticeable way. I remember being in the middle of creating an asset and thinking to myself \"Why am I creating this again?\" Before long, this project became very overwhelming and frustrating. After introducing a game breaking bug and being unable to resolve the issue, I decided I needed more experience before attempting something of this scale.\n\n" +
        "\tDespite how it sounds, this project was not a total disaster. I created my first playable character and my first enemies with animations and attacks. The player had a fully functioning inventory system. There were shops where the player could buy potions, weapons and buildings. Buying a weapon or potion would add your purchase to your inventory. Clicking the weapon would equip it and allow you to attack with it, while clicking the potion would allow you to heal and consume the potion. Buying a building would switch the game's camera to the build camera, and switch the games controls to build controls. The player could choose a location in a restricted area to place a building which he could later upgrade. All of this stuff worked almost as well as I imagined. Sadly I eventually introduced a bug that broke the build camera. This was the bug that discouraged me from continuing the project. But I was still really impressed with how far I had come, and I had learned a really valuable, lesson about the importance of project planning.\n\n" +
        "\tI currently have no plans to revive the project, but I am super proud of this one. I think some day, maybe with a small team, I would like to come back and see where I can take this idea."
    })
}
</script>