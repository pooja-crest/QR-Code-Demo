const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.js('resources/js/app.js', 'public/js/main')
    .version()
    .webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[name].[contenthash:8].js',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js'),
                '@assets': path.resolve(__dirname, 'resources/assets'),
                '@sass': path.resolve(__dirname, 'resources/sass'),
                '@uploads': path.resolve(__dirname, 'public/uploads'),
                '@custom-icon': path.resolve(__dirname, 'resources/assets/icons'),
            }
        },
    })
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [require('autoprefixer')]
    })
    .postCss('resources/assets/css/main.css', 'public/css', [
        tailwindcss('tailwind.config.js'),
    ])
    .copy('resources/assets/css/variables.css', 'public/css/variables.css')
    .copy('resources/assets/css/feather-icon.css', 'public/css/feather-icon.css')
    .copyDirectory('resources/assets/images', 'public/images');