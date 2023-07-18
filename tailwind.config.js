/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Montserrat': 'sans-serif',
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
    colors: {
      'silver': '#EDEAF2',
      'container-gray': '#DADADC',
      'violet': '#8B56D3',
      'white': '#FFFFFF',
      red: {
        400: "#f87171",
        500: "#ef4444",
      },
    },
  },
  plugins: [],
}
