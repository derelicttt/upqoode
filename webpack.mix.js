// webpack.mix.js
let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.setPublicPath("public");

mix.postCss("src/postcss/tailwind.css", "public/css", [
    require("tailwindcss"),
]);
mix.sass('src/sass/main.scss','public/css');
mix.js('src/js/main.js', 'public/js');
mix.js('src/js/scroll.js','public/js');
mix.copyDirectory('src/img', 'public/images');

