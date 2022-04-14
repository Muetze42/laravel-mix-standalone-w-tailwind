module.exports = {
  content: require('fast-glob').sync([
    './public/*.php',
    './public/**/*.html',
  ]),
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  // module: {
  //   rules: [
  //     {
  //       use: [
  //         {
  //           loader: 'postcss-loader',
  //           options: {
  //             ident: 'postcss',
  //             plugins: [
  //               require('tailwindcss'),
  //               require('autoprefixer'),
  //             ],
  //           },
  //         }
  //       ]
  //     }
  //   ]
  // }
}
