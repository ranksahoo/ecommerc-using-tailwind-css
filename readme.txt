1) npx create-react-app my-app --template typescript 
npx create-react-app . --template typescript

2) npm install -D tailwindcss postcss autoprefixer
3) npx tailwindcss init -p
4) /** @type {import('tailwindcss').Config} */ module.exports = { content: [ "./src/**/*.{js,jsx,ts,tsx}", ], theme: { extend: {}, }, plugins: [], }
5)  @tailwind base; @tailwind components; @tailwind utilities;