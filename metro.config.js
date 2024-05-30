/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };

// Learn more https://github.com/facebook/react-native
// eslint-disable-next-line no-undef
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
