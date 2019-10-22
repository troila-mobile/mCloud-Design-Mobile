module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    '@react-native-community'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    // 'react',
    // 'react-native',
    'babel'
  ],
  rules: {
    "indent": ["error", 4],
    "react/jsx-indent-props": [2, 4],
    "react/jsx-indent": [2,4],
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "react/static-property-placement": [2,'static public field'],
    "lines-between-class-members": [2,'never'],
    "semi": [2,'never'],
    "react/prefer-stateless-function":0,
    "import/prefer-default-export":0,
    "no-var":2,
    "eqeqeq":1,
    "default-case":1,
    "no-mixed-spaces-and-tabs":1,
    "no-multiple-empty-lines":1,
    "no-empty-function":1,
    "no-useless-return":2,
    "no-unreachable":2,
    "max-classes-per-file": ["error", 2],
    "comma-dangle": 1,
    "react/prop-types": 2,
    "react/destructuring-assignment": 1,
    "no-underscore-dangle": 0,
    // "react/sort-comp": [2, {
    //   order: [
    //     'static-methods',
    //   ],
    // }],
    "import/order": 0,
    "class-methods-use-this": 0,
    "max-len": [2, 120],
    "react/forbid-prop-types":0,
    "import/no-unresolved": [2, { "ignore": ['\.png$'] }],
    "react/require-default-props": 0,
    "react/state-in-constructor": [1,"never"],
    "global-require":0,
    "linebreak-style":"off",
    "prettier/prettier":0,
    "import/no-extraneous-dependencies":0
  }
};
