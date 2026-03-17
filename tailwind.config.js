/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        juniper: '#3b82f6',
        light_juniper: '#2563eb',
        robin: '#1d4ed8',
        slate: '#52575c',
        cherry: '#1e40af',
        honey: '#60a5fa',
        aqua: '#93c5fd',
        gitlab: '#6753B5',
        vanilla: {
          100: '#ffffff',
          200: '#f5f5f5',
          300: '#eeeeee',
          400: '#c0c1c3'
        },
        ink: {
          100: '#373c49',
          200: '#2c303a',
          300: '#21242c',
          400: '#16181d'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      }
    }
  },
  plugins: []
}
