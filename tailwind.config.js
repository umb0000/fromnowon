/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React의 모든 파일 포함
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg)', opacity: 1 },
        }
      },
      animation: {
        flip: 'flip 2s ease-in-out infinite',
      }
    }
  },
  plugins: [],
  
};
