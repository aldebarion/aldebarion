const custom = require('../webpack.config.js')

module.exports = {
  stories: [/*"./Welcome.stories.js",*/ '../src/**/__stories__/*.stories.jsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        ...custom.modules,
        rules: custom.module.rules,
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
      },
    }
  },
}
