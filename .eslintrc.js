module.exports = {
  env: {
    browser: true,
    mongo: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prop-types': [0],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
