/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // This enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        background: "#DDCAB0",
        surface: "#CEB392", 
        primary: "#8F7C67",
        secondary: "#796D5F",
        "text-primary": "#281E15",
        "text-secondary": "#796D5F",
        borders: "#CDBBA1",
        
        // Dark Mode Colors (handled via CSS custom properties)
        dark: {
          background: "#281E15",
          surface: "#796D5F",
          primary: "#CEB392", 
          secondary: "#CDBBA1",
          "text-primary": "#DDCAB0",
          "text-secondary": "#8F7C67",
          borders: "#3E332A",
        }
      },
    },
  },
  plugins: [],
}
