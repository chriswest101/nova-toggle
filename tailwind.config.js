/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.js",
    './resources/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  plugins: [],
}
