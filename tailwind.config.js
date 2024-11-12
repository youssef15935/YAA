module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Cible uniquement les fichiers JavaScript, JSX, TypeScript et TSX dans le dossier src
    "./public/index.html", // Inclut le fichier HTML dans le dossier public si nécessaire
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInSlideUp: 'fadeInSlideUp 1s ease-out',
      },
    },
  },
  plugins: [],
}
