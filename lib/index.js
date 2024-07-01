module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2021: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
      },
    },
    "import/extensions": [".js", ".ts", ".jsx", ".tsx"],
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "prettier",
  ],
  rules: {
    radix: 0,
    // Typescript
    "guard-for-in": "warn",
    "arrow-body-style": ["error", "as-needed"],
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-plusplus": "off",
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    // React
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-multi-comp": 0,
    "react/no-array-index-key": "warn",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "import/no-extraneous-dependencies": 0,
    "no-restricted-syntax": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
