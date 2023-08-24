import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        'ipad': { 'max': '991px' },
        'mobile': { 'max': '780px' },
        'mobileView': { 'max': '767px' },
        'xs': { 'max': '640px' },
        'xxs': { 'max': '575px' },
        'xss': { 'max': '475px' },
        'xxxs': { 'max': '425px' },
        'smalldevice': { 'max': '375px' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      minHeight: {
        '100': '100px',
      },
      maxWidth: {
        220: '220px',
      },
      height: {
        380: '380px',
      },
      width: {
        500: '500px',
        '30': '30px',
      },
      margin: {
        18: '18px',
        30: '30px',
      },
      gap: {
        '10': '10px',
        '30': '30px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
export default config
