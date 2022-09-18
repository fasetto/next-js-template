const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
          postcssOptions: {
            config: path.resolve(__dirname, "../postcss.config.js"),
          },
        },
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src/"),
    };
    return config;
  },
};
