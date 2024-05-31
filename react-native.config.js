module.exports = {
  project: {
    android: {
      sourceDir: './android',
    },
    ios: {},
  },
  dependencies: {
    'react-native-sqlite-storage': {
      platforms: {
        ios: null,
      },
    },
  },
};
