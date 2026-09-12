/**
 * Metro configuration for React Native
 *
 * @format
 */

const path = require('path')

module.exports = {
  // Allows Metro to resolve the development copy of the library.
  watchFolders: [path.resolve(__dirname, '..')],
  resolver: {
    nodeModulesPaths: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, '..', 'node_modules')],
  },
}
