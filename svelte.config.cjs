const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const { resolve } = require("path");

// Rollup plugin to use with XState
const replace = require('@rollup/plugin-replace');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: node(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            /** 
             * ssr workaround
             * 
             * XState issue : Not working with Svelte/kit beta #2032
             * Vite issue : SSR importing xstate with ssr.noExternal causes SyntaxError: Unexpected token '.' #2667
             * */
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {})
            },
            resolve: {
                alias: {
                    $components: resolve(__dirname, "./src/components"),
                }
            },
            plugins: [
                /** 
                 * Workaround provided by XState issue 
                 * Svelte usage recipe #1169
                 * 
                 * Adapted with 'development' to run in dev 
                 * */
                replace({
                    'process.env.NODE_ENV': JSON.stringify('development')
                }),
            ]
        }
    }
};