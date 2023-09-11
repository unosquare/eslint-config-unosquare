module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
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
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  rules: {
    radix: 0,
    // Typescript
    "arrow-body-style": ["error", "as-needed"],
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-plusplus": "off",
    // React
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-multi-comp": 0,
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
  },
};
