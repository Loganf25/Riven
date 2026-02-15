/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        back: '#0D1821',
        primary: '#344966',
        secondary: '#BFCC94',
        text: '#F0f4EF', 
        accent: '#B4CDED'
        
      }
    },
  },
  plugins: [],
}
