import "font-awesome/css/font-awesome.min.css"; // Ensure your project is capable of handling css files
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa4";
import "vuetify/styles";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
