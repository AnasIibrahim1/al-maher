// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'sans': ['Cairo', 'sans-serif'],
      },
      screens: {
        'xxl': '1450px',
        'xl': '1250px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '480px',
        'xxs': '320px',
      },
    },
  },
  plugins: [],
}; 