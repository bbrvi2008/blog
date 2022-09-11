const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    useJSXTextNode: true,
    project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-underscore-dangle': 0,
    'arrow-body-style': ['warn', 'always'],
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'func-names': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-prototype-builtins': 0,
    'prefer-destructuring': 0,
    'no-else-return': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
        argsIgnorePattern: '^(_|doc$|req$|res$|next$|props$|params$|opts$|e$)',
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-children-prop': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 0,
  },
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': [2, { parser: 'graphql' }],
        // '@graphql-eslint/avoid-duplicate-fields': 'error',
        '@graphql-eslint/executable-definitions': 'error',
        '@graphql-eslint/fields-on-correct-type': 'error',
        '@graphql-eslint/fragments-on-composite-type': 'error',
        '@graphql-eslint/known-argument-names': 'error',
        '@graphql-eslint/known-directives': 'error',
        '@graphql-eslint/known-type-names': 'error',
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/no-deprecated': 'warn',
        '@graphql-eslint/no-unused-variables': 'warn',
        '@graphql-eslint/provided-required-arguments': 'error',
        '@graphql-eslint/scalar-leafs': 'error',
        '@graphql-eslint/unique-argument-names': 'error',
        '@graphql-eslint/unique-input-field-names': 'error',
        '@graphql-eslint/unique-variable-names': 'error',
        '@graphql-eslint/value-literals-of-correct-type': 'error',
        '@graphql-eslint/variables-are-input-types': 'error',
        '@graphql-eslint/variables-in-allowed-position': 'error',
        '@graphql-eslint/match-document-filename': [
          'error',
          {
            fileExtension: '.graphql',
            query: 'PascalCase',
            mutation: 'PascalCase',
            subscription: 'PascalCase',
            fragment: { style: 'PascalCase', suffix: '.fragment' },
          },
        ],
      },
    },
  ],
}
