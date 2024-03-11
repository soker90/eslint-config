module.exports = {
  extends: [
    "eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "standard",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  setting: {
    react: {
      version: "detect",
    },
    "no-param-reassign": "^@/",
  },
  rules: {
    "prettier/prettier": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-boolean-value": "error",
    "react/self-closing-comp": "error",
    eqeqeq: "error",
    "react/jsx-curly-brace-presence": [
      error,
      { props: "never", children: "never" },
    ],
    "prefer-arrow-callback": "error",
    "no-restricted-syntax": [
      "error",
      "FunctionExpression[generator=false]:not(:has(ThisExpression))",
      "FunctionDeclaration[generator=false]:not(:has(ThisExpression))",
    ],
    "no-param-reassign": "error",
    "import/no-duplicates": ["error", { "prefer-inline": true }],
    "import/order": [
      error,
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "./**/{*}{.css,.scss,.styles.js}",
            group: "object",
            position: "before",
          },
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        distinctGroup: true,
        "newlines-between": "always",
      },
    ],
  },
};
