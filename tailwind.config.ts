import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'cmyk',
      'forest',
      {
        winlight: {
          primary: '#000000',
          secondary: '#595959',
          accent: '#000000',
          neutral: '#e5e7eb',
          'base-100': '#ffffff',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#fde047',
          error: '#ef4444',
        },
        windark: {
          primary: '#ffffff',
          secondary: '#a1a1a1',
          accent: '#ffffff',
          neutral: '#111827',
          'base-100': '#000000',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#fde047',
          error: '#ef4444',
        },
        court4u: {
          primary: '#f0f0f0',
          secondary: '#ffffff',
          neutral: '#222',
          'base-100': '#ffffff',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#fde047',
          error: '#ef4444',
        },
      },
    ],
    darkTheme: 'forest', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    themeRoot: ':root',
  },
};
export default config;
