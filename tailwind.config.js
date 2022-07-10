module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Mada: ['Mada', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'plant': "url('https://images.pexels.com/photos/916339/pexels-photo-916339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }
    },
  },
  plugins: [],
}
