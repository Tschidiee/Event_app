/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        // Define custom numeric colors here
        '100': '#f7fafc',
        '200': '#edf2f7',
        '300': '#e2e8f0',
        '400': '#cbd5e0',
        '500': '#a0aec0',
        '600': '#718096',
        '700': '#4a5568',
        '750': "#1277b0",
        '800': '#2d3748',
        '900': '#1a202c',
      }
    }
    
  },
  plugins: [
  ],
}
