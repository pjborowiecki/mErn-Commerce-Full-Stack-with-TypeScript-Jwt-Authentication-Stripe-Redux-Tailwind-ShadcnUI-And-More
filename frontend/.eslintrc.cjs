const path = require("path")
const vitest = require("eslint-plugin-vitest")

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:jsx-a11y/recommended",
    "plugin:vitest/recommended",
    "plugin:testing-library/react",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["react-refresh", "simple-import-sort", "tailwindcss"],
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "import/prefer-default-export": 0,
    "import/no-anonymous-default-export": 0,
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^@/styles", "^.*\\.css$", "^@/config", "^@/data"],
          ["^react", "^@?\\w"],
          ["^@/types", "^@/validations"],
          ["^@/providers", "^@/hooks"],
          ["^@/pages"],
          ["^@/components/ui"],
          [""],
          ["^@/components"],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
    "sort-imports": "off",
    "import/order": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["cn", "cva"],
      config: path.join(__dirname, "./tailwind.config.ts"),
      classRegex: "^(class(Name)?|tw)$",
    },
    "import/resolver": {
      node: {
        extensions: ["*.{js,jsx,ts,tsx}"],
        paths: ["src"],
      },
    },
  },
  globals: {
    ...vitest.environments.env.globals,
  },
}
