const mix = require("laravel-mix");
const webpack = require("webpack");

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        output: {
            chunkFilename: "js/[name].js?id=[chunkhash]",
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    });
