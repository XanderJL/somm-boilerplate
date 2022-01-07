// const tsConfig = require('./tsconfig.json')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],

  rules: {
    'import/newline-after-import': 'warn',
    'import/order': 'off',
    'sort-imports': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^.+\\.s?css$'],
          ['^\\u0000'],
          ['^react$', '^react-dom$'],
          // Object.keys(tsConfig.compilerOptions.paths).map(path => {
          //   return `^${path.replace('/*', '')}`
          // }),
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^https?://']
        ]
      }
    ]
  },
  settings: {
    //
  },

  overrides: [
    {
      files: ['**/*.d.ts', '**/*.ts', '**/*.tsx'],
      extends: ['plugin:prettier/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        //
      },
      settings: {
        //
      }
    }
  ],
  root: true
}
