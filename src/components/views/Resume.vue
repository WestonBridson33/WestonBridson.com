<template>
  <v-container>
    <div>
      <v-img
      class="mx-auto mt-16 mb-8"
        width="50em"
        src="https://i.ibb.co/qRVzkrC/Screenshot-2023-11-18-112101.png"
      ></v-img>
    </div>
    <div class="d-flex justify-center">
      <v-btn 
        large 
        dark 
        class="secondary--text mb-10"
        width="20em"
        :disabled="isDownloading"
        @click="downloadPdf"
      >
        <span v-if="isDownloading"><v-progress-circular indeterminate color="secondary"></v-progress-circular></span>
        <span v-else><v-icon>mdi-download</v-icon> Download</span> 
      </v-btn>
      <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            :color="snackColor"
          >
            {{ snackText }}

            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
    </div>
    <div id="contact">
      <div v-if="$vuetify.breakpoint.xs" class="contact-heading-xs secondary--text">
        <h2>Get in Touch</h2>
      </div>
      <div v-else-if="$vuetify.breakpoint.sm" class="contact-heading-sm secondary--text">
        <h2>Get in Touch</h2>
      </div>
      <div v-else class="contact-heading secondary--text">
        <h2>Get in Touch</h2>
      </div>
      <contact-form projectName="Resume"></contact-form>
    </div>
  </v-container>
</template>

<script>
  import ContactForm from '../UI/ContactForm.vue';
  export default {
    components:{
      ContactForm
    },
    data: () => ({
      isDownloading: false,
      snackbar: false,
      snackText: "",
      snackColor: "",
      timeout: 3000,
    }),
    methods:{
      downloadPdf() {
      // create element <a> for download PDF
        try {
          this.isDownloading = true;
          const link = document.createElement('a');
          link.href = "assets/WestonBridsonGameDevResume.pdf";
          link.target = '_blank';
          link.download = "WestonBridsonGameDevResume.pdf";

          // Simulate a click on the element <a>
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (e) {
          console.log(e);
          this.activateSnackbar("Error occurred", 4000, "red--text");
        } finally {
          this.isDownloading = false;
          this.activateSnackbar("Download Started!", 4000, "secondary--text");
        }
      },
      activateSnackbar(text, timeout, color) {
      this.snackText = text;
      this.timeout = timeout;
      this.snackColor = color;
      this.snackbar = true;
    },
    }
  }
</script>

<style lang="css" scoped>

</style>



<!-- <template>
  <section class="secondary--text d-flex justify-center">
    <div class="text-center primary darken-4 my-16" style="max-width: 60em;">
      <h1 style="padding-top: .5em">Weston Bridson</h1>
      <div class="contact">
        <v-row dense>
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
      <v-divider dark class="secondary"></v-divider>
      <div class="objective pt-5">
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
      <div class="education pt-5">
        <v-row>
          <strong><h2>Education</h2></strong>
        </v-row>
        <v-row style="max-height: 1.5em;">
          <v-col class="text-left pl-10 py-0" style="max-height: 5px;">
            <h3>Illinois State University</h3>
          </v-col>
          <v-col class="text-right pt-1">
            <p>(August 2019 - August 2021)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense  color="primary darken-4 mt-0 py-0 my-0">
            <v-list-item-group class="pl-8 py-0 my-0">
              <v-list-item  v-for="(item, i) in isuList" :key="i" class="list-item">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0 ">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
        <v-row style="max-height: 1.6em">
          <v-col class="text-left pl-10 py-0" >
            <h3>Illinois Central College</h3>
          </v-col>
          <v-col class="text-right pt-1">
            <p class="mb-3">(January 2017 - May 2019)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-4 py-0">
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
        <v-row style="max-height: 1.6em">
          <v-col cols="4" class="text-left pl-10 py-0">
            <h3>Software Developer</h3>
          </v-col>
          <v-col class="text-right pt-1">
            <p>(Full-time, Growmark Inc, November 2021 - present)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-4 py-0">
            <v-list-item-group class="pl-8">
              <v-list-item v-for="(item, i) in fullTimeList" :key="i">
                <v-icon color="secondary"
                  >mdi-circle-medium</v-icon
                >
                <p class="secondary--text pa-0">{{ item }}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-row>
        <v-row style="max-height: 1.6em;">
          <v-col cols="4" class="text-left pl-10 py-0 pr-0">
            <h3>Software Developer</h3>
          </v-col>
          <v-col class="text-right pt-1 pv-0">
            <p>(Internship, Growmark Inc, May 2021 - November 2021)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-4 py-0">
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
        <v-row style="max-height: 1.6em">
          <v-col class="text-left pl-10 py-0">
            <h3>Novice Game Developer</h3>
          </v-col>
          <v-col class="text-right pt-1">
            <p>(Free time, Feb 2018 - present)</p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-4 py-0">
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
        <v-row style="max-height: 1.6em">
          <v-col cols="3" class="text-left pl-10 py-0">
            <h3>Volunteer</h3>
          </v-col>
          <v-col class="text-right pt-1">
            <p >
              (St. John Paul II’s Catholic Newman Center, August 2019 - present)
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-list dense color="primary darken-4 py-0">
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
      </div>
      <div class="languages text-left">
        <h2>Courses and Languages</h2>
        <v-list dense color="primary darken-4" class="pt-0 pb-4">
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
    fullTimeList: [
      "Maintenance on recently launched web application",
      "Worked in a team to fix reported bugs",
      "Used AWS CloudWatch, VueJS, and Typescript"
    ],
    languagesList: [
      "HTML, CSS, JavaScript, SQL - 2 years",
      "Bootstrap, NodeJS - 1 semester",
      "Java - 3 semesters",
      "C# - 3 years self-taught",
    ],
  }),
};
</script>

<style scoped>
.contact {
  padding-left: 5em;
  padding-right: 5em;
  padding-bottom: 2em;
}
.objective {
  padding-top: 3em;
  padding-left: 5em;
}
.education,
.languages {
  padding-left: 5em;
  padding-right: 5em;
}
h1 {
  font-family: pristina;
  font-size: 5em;
}
h2, h3, p {
  font-family: sitkBanner;
}
p{
    margin-bottom: 0px;
}

</style> -->