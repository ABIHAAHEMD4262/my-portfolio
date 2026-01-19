/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ✅ Important for manual toggling
    content: [
      './src/**/*.{js,ts,jsx,tsx}', // ✅ Tells Tailwind to scan your files
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1a202c',
          secondary: '#2d3748',
          accent: '#38b2ac',
        },
      },
    },
    plugins: [],
  };
  