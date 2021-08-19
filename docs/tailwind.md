# Tailwind

http://www.csszengarden.com/

https://tailwindui.com/preview

:Designing with Tailwind CSS: Setting up Tailwind and PostCSS:
https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=2&ab_channel=AdamWathan

## Installation

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm install -D postcss-cli@latest postcss-import@latest postcss-nesting@latest

## init

px tailwindcss init --postcss
px tailwindcss init tailwind-full.config.js --full

## build

px tailwindcss --no-autoprefixer -i ./src/tailwind.css -o ./dist/tailwind.css
NODE_ENV=production npx tailwindcss -i ./src/tailwind.css -o ./dist/tailwind.css --minify

## Config

```js
// postcss.config.js
module.exports = {
    plugins: [
        require("postcss-import"),

        // ?
        require(​'postcss-flexbugs-fixes'​),
        // ?
    ​ 	 require(​'postcss-preset-env'​)({
    ​ 	      autoprefixer: {
    ​ 	        flexbox: ​'no-2009'​
    ​ 	      },
    ​ 	      stage: 3
    ​ 	 }),

        require('tailwindcss/nesting')(require('postcss-nesting')),
        require("tailwindcss"),
        require("autoprefixer"),
    ],
}
```

```js
// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#EA755E",
        secondary: "#BD675F",
      },
    },
    fontFamily: {
      headline: ["Poppins", "sans-serif"],
      sans: ["Nunito", "sans-serif"],
      display: ["Nunito", "sans-serif"],
      body: ["Nunito", "sans-serif"],
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,

      red: colors.red,
      indigo: colors.indigo,
      blue: colors.sky,
      yellow: colors.amber,
      teal: colors.teal,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

## Plugins

https://github.com/tailwindlabs

https://tailwindcss.com/docs/plugins

@tailwindcss/typography
@tailwindcss/forms
