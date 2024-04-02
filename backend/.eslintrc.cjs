const path = require("path")

module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "jest.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.build.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
}
