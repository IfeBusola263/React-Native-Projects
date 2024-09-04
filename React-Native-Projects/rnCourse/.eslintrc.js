module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
	'plugin:jest/all',
	"eslint:recommended",
    "plugin:react/recommended",
	"plugin:react-native/all",
    "plugin:prettier/recommended"
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      "ecmaFeatures": {
      "jsx": true
    },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ["prettier","jest", "react","react-hooks", "react-native"],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
      "prettier/prettier": ["error", { "tabWidth": 2 }]
    },
    "settings": {
    "react": {
	"version": "detect"
       }
    },
    overrides:[
      {
          files: ['*.js, *.jsx'],
        excludedFiles: 'babel.config.js',
      }
    ]
};
