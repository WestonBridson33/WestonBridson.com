<template>
  <section class="secondary--text">
    <div class="text-center">
      <h1 style="padding-top: 1em">Weston Bridson</h1>
      <div class="contact">
        <v-row>
          <v-col class="text-left">
            <p>208 E Mulberry St.</p>
            <p>Apt 3</p>
          </v-col>
          <v-col class="text-right">
            <p>(309) 231-1794</p>
            <p>wbridson97@gmail.com</p>
          </v-col>
        </v-row>
      </div>
      <v-divider dark></v-divider>
      <div class="objective">
        <v-row>
          <strong><h2>Objective</h2></strong>
        </v-row>
        <v-row>
          <p class="pl-10">
            Obtain a job where I can challenge and expand my skill as a
            developer
          </p>
        </v-row>
      </div>
      <div class="education">
        <v-row>
          <strong><h2>Education</h2></strong>
        </v-row>
        <v-row>
          <v-col class="text-left pl-10">
            <h3>Illinois State University</h3>
          </v-col>
          <v-col class="text-right">
            <p>(August 2019 - August 2021)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-3 pt-0">
            <v-list-item-group class="pl-8">
              <v-list-item v-for="(item, i) in isuList" :key="i">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
        <v-row>
          <v-col class="text-left pl-10">
            <h3>Illinois Central College</h3>
          </v-col>
          <v-col class="text-right">
            <p>(January 2017 - May 2019)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-3 pt-0">
            <v-list-item-group class="pl-8">
              <v-list-item v-for="(item, i) in iccList" :key="i">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
      </div>
      <div class="education">
        <v-row>
          <strong><h2>Experience</h2></strong>
        </v-row>
        <v-row>
          <v-col cols="5" class="text-left pl-10">
            <h3>Software Developer</h3>
          </v-col>
          <v-col class="text-right">
            <p>(Internship, Growmark Inc, May 2021 - November 2021)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-3 pt-0">
            <v-list-item-group class="pl-8">
              <v-list-item v-for="(item, i) in internList" :key="i">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
        <v-row>
          <v-col class="text-left pl-10">
            <h3>Novice Game Developer</h3>
          </v-col>
          <v-col class="text-right">
            <p>(Free time, Feb 2018 - present)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-3 pt-0">
            <v-list-item-group class="pl-8">
              <v-list-item v-for="(item, i) in gameList" :key="i">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
        <v-row>
          <v-col cols="4" class="text-left pl-10">
            <h3>Volunteer</h3>
          </v-col>
          <v-col class="text-right">
            <p >
              (St. John Paul II’s Catholic Newman Center, August 2019 - present)
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-3 pt-0">
            <v-list-item-group class="pl-8">
              <v-list-item v-for="(item, i) in volunteerList" :key="i">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
        <v-row>
          <v-col class="text-left pl-10">
            <h3>Part-Time Associate</h3>
          </v-col>
          <v-col class="text-right">
            <p>(Home Goods, March 2017 - August 2019)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-3 pt-0">
            <v-list-item-group class="pl-8">
              <v-list-item v-for="(item, i) in hgList" :key="i">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
      </div>
      <div class="languages text-left">
        <h2>Courses and Languages</h2>
        <v-list dense color="primary darken-3">
          <v-list-item-group class="pl-5">
            <v-list-item v-for="(item, i) in languagesList" :key="i">
              <v-icon color="secondary">mdi-circle-medium</v-icon>
              <p class="secondary--text pa-0">{{ item }}</p>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    isuList: [
      "GPA: 3.02",
      "Bachelor of Science Degree in Aplied Science and Technology",
      "Major: Information Systems - Web/App Development",
    ],
    iccList: ["Obtained Associate of Arts Degree in Information Techonolgy"],
    internList: [
      "Built a platform that would be used to manage all of the companies internal applications",
      "Used AWS Lambda, API, Gateway and other tools",
      "Used PostgresSQL to build a database",
      "Used VueJS to build the UI",
    ],
    gameList: [
      "Developed scripts (C#)",
      "Utilized Unity (game engine)",
      "Taught myself many new skills including project management",
    ],
    volunteerList: [
      "Co-lead the service team",
      "Organized planned, and assisted with many jobs",
    ],
    hgList: [
      "Earned employee of the month",
      "Effectivly communicated with managers, co-workers, and customers",
    ],
    languagesList: [
      "HTML, CSS, JavaScript, SQL - 2 years",
      "Bootstrap, NodeJS - 1 semester",
      "Java - 3 semesters",
      "C# - 3 years self-taught",
      "Laravel - 1 month, self-taught",
      "PHP - 1 semester",
    ],
  }),
};
</script>

<style scoped>
.contact {
  padding-left: 35em;
  padding-right: 35em;
  padding-bottom: 2em;
}
.objective {
  padding-top: 3em;
  padding-left: 35em;
}
.education,
.languages {
  padding-left: 35em;
  padding-right: 35em;
}
h1 {
  font-family: pristina;
  font-size: 5em;
}
h2,
h3,
p {
  font-family: sitkBanner;
}
p{
    margin-bottom: 0px;
}
h2{
    padding-top: .5em
}
</style>