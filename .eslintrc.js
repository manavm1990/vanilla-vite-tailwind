module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "capitalized-comments": "off",
    "new-cap": "off",
    "no-unused-vars": "warn",
  },
};
