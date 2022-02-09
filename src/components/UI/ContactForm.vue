<template>
  <section class="d-flex justify-center">
    <v-card color="primary darken-4" width="60em" class="mt-5 mb-16">
      <v-form class="px-16 py-9">
        <v-row>
          <input type="hidden" name="contact_number" dark />
        </v-row>
        <v-row>
          <v-text-field
            type="text"
            v-model="templateParams.from_name"
            color="secondary"
            placeholder="Name"
            name="from_name"
            :rules="nameRules"
            dark
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            type="text"
            v-model="templateParams.from_email"
            color="secondary"
            placeholder="Email"
            name="from_email"
            :rules="emailRules"
            dark
          ></v-text-field>
        </v-row>
        <v-row>
          <v-textarea
            type="text"
            v-model="templateParams.message"
            placeholder="Enter your message here"
            color="secondary"
            name="message"
            :rules="nameRules"
            dark
          ></v-textarea>
        </v-row>
        <v-row justify="center" class="secondary--text">
          <v-btn
            width="15em"
            class="secondary black--text"
            @click="send"
            color="secondary"
            :disabled="isError"
            >Send</v-btn
          >
        </v-row>
      </v-form>
    </v-card>
  </section>
</template>

<script>
import emailjs from "@emailjs/browser";
import lodash from "lodash";
export default {
  data: () => ({
    templateParams: {
      to_name: "Weston",
      to_email: "wbridson97@gmail.com",
      from_name: "",
      from_email: "",
      message: "",
    },
    nameRules: [(v) => (v && v.length > 0) || `Field can not be blank`],
    emailRules: [
      (v) =>
        (v && lodash.includes(v, "@")) || `Please provide an email address`,
    ],
  }),
  computed: {
      isError() {
        if (
          this.templateParams.from_name.length < 1 ||
          this.templateParams.message.length < 1 ||
          !lodash.includes(this.templateParams.from_email, "@")
        ) {
          return true;
        } else {
          return false;
        }
      },
    },
  methods: {
    send() {
      //userID from:
      //https://dashboard.emailjs.com/admin/integration
      // emailjs.send(serviceID, templateID, templateParams, userID);
      emailjs.send(
        "service_oidy9nz",
        "contact_form",
        this.templateParams,
        "user_sfffgjW9IDCnbrMvQaMHw"
      );
    },
  },
};
</script>
