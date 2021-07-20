module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Mono', 'monospace'],
      },
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkcyan: 'hsl(183, 100%, 15%)',
        darkGrayCyan: 'hsl(184, 14%, 56%)',
        lightGrayCyan: ' hsl(185, 41%, 84%)',
        lightGrayCyan2: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      screens: {
        desk: '768px',
      },
      backgroundColor: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
