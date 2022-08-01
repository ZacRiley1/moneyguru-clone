/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        fontFamily: {
            fredoka: "'Fredoka', sans-serif",
        }
    },
  },
  plugins: [
    require(
        '@tailwindcss/forms',
        '@tailwindcss/aspect-ratio'
    ),
  ],
}
