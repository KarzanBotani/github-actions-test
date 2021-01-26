module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  plugins: [
    // Keep as last
    'prettier',
  ],
  extends: [
    'eslint:recommended',

    // Keep as last
    'prettier',
  ],
  rules: {
    // Keep as first
    'prettier/prettier': 'error',

    'no-unused-vars': 'warn'
  },
};

/**
 * Should add?:
 *  - eslint-plugin-import (https://www.npmjs.com/package/eslint-plugin-import)
 *  - eslint-plugin-node (https://www.npmjs.com/package/eslint-plugin-node)
 */
