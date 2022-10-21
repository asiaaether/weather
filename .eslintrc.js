module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "eslint-config-prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "no-unused-expressions": "off",
    "no-param-reassign": 0,
    "prefer-promise-reject-errors": "off",
    "import/prefer-default-export": "off",
  },
};
