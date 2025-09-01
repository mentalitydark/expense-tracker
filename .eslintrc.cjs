module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": 0,
    "react/react-in-jsx-scope": 0,
    "no-extra-boolean-cast": 0,
    "semi": [ "error", "never" ],
    "quotes": [ "error", "single" ],
    "jsx-quotes": [ "error", "prefer-single" ],
    "key-spacing": [ "error" ],
    "arrow-spacing": [ "error" ],
    "space-in-parens": [ "error" ],
    "keyword-spacing": [ "error" ],
    "block-spacing": [ "error", "always" ],
    "space-before-blocks": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "eol-last": [ "error", "always" ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "no-duplicate-imports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "type", ["internal", "parent"], "sibling"],
        "alphabetize": { "order": "asc" },
        "newlines-between": "always"
      }
    ]
  },
}
