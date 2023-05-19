/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'sext':['Passero One']
      },
      colors: {
      'merablue': '#9BE2E4',
      'merabrown': '#382A1A',
      'meraslate': '#698481',
      'meragray': '#3B3C3E',
      'meraslate': '#A1A1AA',
        'merapurple': '#4D3D53',
      'meradarkpink': '#481D36',
      },
    },
  },
  
  plugins: [],
}