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
    // "babel/semi": 1,
    // "max-classes-per-file": ["error", 3],
    // "lines-between-class-members": 0,
    // "comma-dangle": 0,
    // "react/prop-types": 0,
    // "react/destructuring-assignment": 0,
    // "no-underscore-dangle": 0,
    // "react/sort-comp": [2, {
    //   order: [
    //     'static-methods',
    //   ],
    // }],
    // "quotes": 0,
    // "import/order": 0,
    // "no-use-before-define": 0,
    // "no-return-assign": 0,
    // "semi": 0,
    // "class-methods-use-this": 0,
    // "no-console": 0,
    // "no-unused-expressions": 0,
    // "max-len": [2, 200]
  }
};
