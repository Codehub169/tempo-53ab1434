/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If using Next.js App Router
  ],
  theme: {
    extend: {
      colors: {
        'hueneu-primary': '#4A6A62',      // Deep Teal/Grey-Green (Neu)
        'hueneu-secondary': '#A8C6C0',    // Muted Sage (Calm)
        'hueneu-accent': '#FFB7C3',       // Soft Rose Pink (Hue pop)
        'hueneu-neutral-bg': '#F5F5F5',   // Off-White/Light Neutral (Main Background)
        'hueneu-neutral-text': '#333333', // Dark Grey (Secondary Text)
        'hueneu-success': '#8FBC8F',      // Medium Sea Green
        'hueneu-warning': '#DAA520',      // Goldenrod
        'hueneu-error': '#CD5C5C',        // Indian Red
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'logo-reveal': 'logo-reveal 1.5s ease-out forwards',
        'scroll-down': 'scroll-down 2s infinite ease-in-out',
        'pop-out': 'pop-out 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      },
      keyframes: {
        'logo-reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pop-out': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss') // If using Headless UI components with Tailwind CSS variants
  ],
}