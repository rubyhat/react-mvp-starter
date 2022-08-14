module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    indent: ["warn", 2], // use 2 space
    semi: ["warn", "always"], // use ;
    "no-console": "warn", // don't build console.log()
    "prefer-const": "warn", // use 'const' for constants instead of 'let'
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ], // setup order of imports in files
        "newlines-between": "always-and-inside-groups", // setup newlines between imports in line
      },
    ],
  },
  ignorePatterns: ["package.json", "package-lock.json", "tsconfig.json"],
};
