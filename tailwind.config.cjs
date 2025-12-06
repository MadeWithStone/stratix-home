/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#0f766e',
          blue: '#2563eb',
          amber: '#f59f0b'
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 28px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
