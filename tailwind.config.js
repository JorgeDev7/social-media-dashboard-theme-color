/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        "limeGreen": "hsl(163, 72%, 41%)",
        "brightRed": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram-gradient-1": "hsl(37, 97%, 70%)",
        "instagram-gradient-2": "hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",
        // Dark Theme Btn
        "dark-theme-btn-gradient-1": "hsl(210, 78%, 56%)",
        "dark-theme-btn-gradient-2": "hsl(146, 68%, 55%)",
        // Dark Theme BG
        "veryDarkBlueBG": "hsl(230, 17%, 14%)",
        "veryDarkBlueTopBG": "hsl(232, 19%, 15%)",
        "darkDesaturatedBlueCardBG": "hsl(228, 28%, 20%)",
        // Dark Theme Text
        "desaturatedBlueText": "hsl(228, 34%, 66%)",
        "white": "hsl(0, 0%, 100%)",

        // Light Theme Btn
        "light-theme-btn": "hsl(230, 22%, 74%)",
        // Light Theme BG
        "whiteBG": "hsl(0, 0%, 100%)",
        "veryPaleBlueTopBG": "hsl(225, 100%, 98%)",
        "lightGrayishBlueCardBG": "hsl(227, 47%, 96%)",
        // Light Theme Text
        "darkGrayishBlueText": "hsl(228, 12%, 44%)",
        "veryDarkBlueText": "hsl(230, 17%, 14%)",

        "hoverBgDarkMode": "hsl(228, 30%, 25%)"
      },
      letterSpacing: {
        "custom": "8px"
      }
    },
  },
  plugins: [],
}

