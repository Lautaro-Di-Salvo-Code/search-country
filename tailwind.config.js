/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  "darkMode": "class",
  theme: {
    extend: {
      maxWidth:{
        "1400pxMaxW": "1800px"
      }
    },
    backgroundColor:{
      "background-lightsoft":"#dbdada",
      "background-lighthard":"#e8e6e6",
      "background-darksoft":"#2B3743",
      "background-darkhard":"#202D36",
      
      
    },
    screens:{
      // super small
      "ssm": "300px",
      // very small
      "vsm": "400px",
      // small
      "sm": "600px",
      // medium
      "md": "800px",
      // largue
      "lg": "1200px",
      // very largue
      "vlg": "1400px",
      // super largue
      "slg": "1600px",
    }
  },
  plugins: [],
}

