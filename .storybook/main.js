const sveltePreprocess = require('svelte-preprocess')
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes("svelte-loader")
    );
    svelteLoader.options = {
      ...svelteLoader.options,
      preprocess: sveltePreprocess({ scss: true }),
    };
    
    config.resolve.alias = {
      ...config.resolve.alias,
      "Components": path.resolve(__dirname, "../src/components"),
      "Constants": path.resolve(__dirname, "../src/constants"),
      "Models": path.resolve(__dirname, "../src/models"),
      "Styles": path.resolve(__dirname, "../src/models"),
    }

    return config;
  }
}
