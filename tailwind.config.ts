import type { Config } from 'tailwindcss';

const config: Config = {
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
        'gradient-building':
          'linear-gradient(90deg, #25836E -0.67%, #ACC981 100.4%)',
        'gradient-title': 'linear-gradient(0deg, #ACC981 0%, #ACC981 100%)',
      },
      colors: {
        bg: '#1d1d1d',
        green1: '#ACC981',
        green2: '#83A537',
        green3: '#91B924',
      },
      keyframes: {
        gradient: {
          '0%': {
            'background-position': '0 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0 50%',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;
