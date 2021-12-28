import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey,
        secondary: colors.lime.darken4,
        hover: '#2e2c2c',
        button: '#1a1917'
        // error: '',
        // info: '',
        // success: '',
        // warning: '',
      },
    },
  },
});
