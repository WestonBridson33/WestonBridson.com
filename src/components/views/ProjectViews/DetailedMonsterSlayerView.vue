<template>
  <base-detailed-project-view
    title="Monster Slayer"
    :source="require('@/Resources/Videos/MonsterSlayer.mp4')"
    :text="text"
    demoType="new-tab"
  ></base-detailed-project-view>
</template>

<script>
import BaseDetailedProjectView from "../../UI/BaseDetailedProjectView.vue";
export default {
  components: {
    BaseDetailedProjectView,
  },
  data: () => ({
    text: `
        \t"Monster Slayer" was part of Maximilian Schwarzmüller's course on Udemy. The original project had a monster health bar, player health  bar,
        "attack", "special attack", "heal", and "surrender" buttons, a "Game Over" screen with a "start new game" button, and a battle log tracking
        the player's and monster's actions. That was all there was to it. After defeating the monster or losing to it, the game would just refresh 
        and you would start over. This was completely fine since the game was meant to be a simple project for the purpose of practicing some basic 
        concepts such as event binding and conditionals. But for some reason, I really enjoyed working on this simple project. So, as I advanced 
        through the rest of the course, If I felt that I needed more practice on a certain subject, I would come back to "Monster Slayer" and either
        expand on it or rework the already existing components to be more dynamic and functional.
      
        \tI first revisited it after learning about components and props. I reworked the whole project by splitting each element on the screen into
        its own component and passed data between them with props and events. I added the ability to start a new battle after winning or losing, 
        without refreshing the browser. This kept the player's health from going back to 100%. Next I added the ability to heal in between each 
        battle. After that, I added an array of monsters with different amounts of health to give the battles a bit of diversity. Still, being able
        to heal with no consequence between each battle made it pretty easy. So, next on the list was gold. Each win rewarded the player with gold, 
        and the player had to spend that gold in order to heal himself. 
       
        \tThe next time I revisited this project, I had completed the Udemy course. The main concept I needed to practice was the Vuex store. Using,
        the store, I reworked the project again. This time I created one central store with a "player" module, and a "monster" module. All of the
        data for the game went in the store and these modules. With this increased organization, it was not too difficult to add new statistics to
        the game. I was able to give both the player and each individual monster their own health, attack, and defense stats. The player also had 
        "maximum mana" and "intelligence" stats which affected how the player would use the "heal" and "special attack" buttons. 

        \tLastly, just because I wanted to, I gave the player the ability to level up. This was my largest addition as it meant I had to create a
        way to track the player's experience points, a way to award the player with experience points, monster level, and a level up menu to give 
        the player a choice in what stats would increase with each level up. Though it sounded like a lot of work, I knew this addition would make
        the game a lot more interesting. So, I had plenty of motivation to work on it and was able to implement and get it to a state that I was
        satisfied with in just under a week. 

        There are still things I would like to add to this project, but I'm not sure if I will ever get around to doing that. The purpose of this
        project was just to practice and I have definately gotten the practice I needed through this project. I also don't see this project being 
        profitable in any way, and even if it was, it was born from Maximillian's project, so I'm not sure I could claim it. So unfortunately, 
        there doesn't seem to be much reason to continue this project unless I just want a break from whatever my current project is at the time.
      `,
  }),
};
</script>
