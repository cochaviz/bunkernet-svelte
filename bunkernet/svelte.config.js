/** @type {import('@sveltejs/kit').Config} */
import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';
import adapterNetlify from '@sveltejs/adapter-netlify';

const config = {
  kit : {
    // hydrate the <div id="svelte"> element in src/app.html
    target : '#svelte',
    adapter : // [
      // adapterNode({
        // out : 'build',
        // precompress : false,
        // env : {host : 'HOST', port : 'PORT'}
      // }),
      // adapterStatic({
        // pages : 'build',
        // assets : 'build',
        // fallback : null
      // }),
    // ]
      adapterNetlify(),
    vite : {
      resolve : {
        alias : [
          {
            find : 'octokit/dist-node',
            replacement : 'octokit/dist-src',
          },
          {
            find : /@octokit\/(.+)\/dist-node/,
            replacement : '@octokit/$1/dist-src',
          },
          {
            find : 'bottleneck/light',
            replacement : 'bottleneck/lib',
          },
          {
            find : 'node-fetch',
            replacement : './node-fetch.js',
          },
          {
            find : 'clean-stack',
            replacement : './clean-stack.js',
          },
        ]
      },
      optimizeDeps : {
        exclude : [
          'octokit',
        ],
        include : [
          'once',
          'before-after-hook',
          'bottleneck/lib',
          'btoa-lite',
          'lru-cache',
          'aggregate-error',
          'fromentries',
        ]
      }
    },
  }
};

export default config;
