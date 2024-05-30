/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cd-accent': '#DBDEEE',
        'cd-black': '#0F0129',
        'cd-brand': '#9F1D00',
        'cd-tertiary': '#CCCCCC',
        'cd-primary': '#1E40AF',
        'cd-secondary': '#90AFC5',
        'cd-white': '#FFFFFF',
        'cd-error': '#D61F14'
      },
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      screens: {
        'cd-desktop': '1469px'
      }
    },
  },
  plugins: [],
}
