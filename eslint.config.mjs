export default [
  {
    ignores: [
      "**/*.{ts,tsx}",
      ".next/**",
      "node_modules/**",
      "dist/**",
      "public/**",
    ],
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
