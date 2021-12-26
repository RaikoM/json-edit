module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version
    }
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react,
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/recommended
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier. MUST BE LAST IN ARRAY !!,
  ],
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/issues/512
    'react/display-name': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/prop-types': 0
  }
};
