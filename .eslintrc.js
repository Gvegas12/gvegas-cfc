module.exports = {
  env: {
    amd: true,
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:node/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["jest", "import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    /* other */
    "no-void": "off",
    camelcase: "off",
    "no-shadow": "off",
    "no-console": "warn",
    "comma-dangle": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "operator-linebreak": "off",
    "no-use-before-define": "off",
    "function-paren-newline": "off",
    quotes: ["error", "double"],
    "implicit-arrow-linebreak": "off",
    "linebreak-style": ["off", "windows"],
    "max-len": ["error", { ignoreComments: true, code: 90 }],
    "no-unused-vars": ["warn"],

    /* node */
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
    "node/prefer-global/url": ["error", "always"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/exports-style": ["error", "module.exports"],
    "node/file-extension-in-import": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],

    /* import */
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: [
          "**/*.test.tsx",
          "**/*.spec.ts",
          /* webpack config */
          "config/webpack/*.ts",
        ],
      },
    ],
  },
};
