const { resolve } = require('path')
const { ProvidePlugin } = require('webpack')

module.exports = async ({ config, mode }) => {
  config.plugins.push(
    new ProvidePlugin({
      // testing stuffs
      'specs': ['storybook-addon-specifications', 'specs'],
      'describe': ['storybook-addon-specifications', 'describe'],
      'it': ['storybook-addon-specifications', 'it'],
      'expect': 'expect',
      'shallowMount': ['@vue/test-utils', 'shallowMount']
    })
  )

  // makes things pretty
  config.resolve.alias['@'] = resolve(__dirname, '.')

  return config
}