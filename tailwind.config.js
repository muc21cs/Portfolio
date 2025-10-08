/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f8ff',
          100: '#d8f0ff',
          200: '#a8e0ff',
          300: '#78d0ff',
          400: '#49c0ff',
          500: '#1bb0ff', // Neon cyan main
          600: '#0090cc',
          700: '#006699',
          800: '#004466',
          900: '#002233',
        },
        secondary: {
          50: '#fff5f8',
          100: '#ffd9e6',
          200: '#ffaad1',
          300: '#ff7abf',
          400: '#ff4aa9',
          500: '#ff1a94', // Neon pink main
          600: '#cc0077',
          700: '#990059',
          800: '#66003c',
          900: '#33001e',
        },
        accent: {
          50: '#f9f7ff',
          100: '#ece6ff',
          200: '#d3c2ff',
          300: '#b999ff',
          400: '#9f70ff',
          500: '#8547ff', // Neon purple main
          600: '#692bbf',
          700: '#4d2080',
          800: '#321650',
          900: '#190b28',
        },
        dark: '#0d0f1a',   // Deep dark background
        light: '#f0f2f5',  // Soft light background
        glowCyan: '#00fff7',   // Extra neon for glows
        glowPink: '#ff00d4',   // Extra neon for glows
        glowPurple: '#b700ff', // Extra neon for glows
      },
    },
  },
  plugins: [],
}
