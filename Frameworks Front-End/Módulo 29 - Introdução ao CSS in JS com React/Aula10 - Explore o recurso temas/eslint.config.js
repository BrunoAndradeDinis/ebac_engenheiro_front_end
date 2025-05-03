import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginPrettier from "eslint-plugin-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      prettier: pluginPrettier
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error", // para o prettier
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
])

// import js from "@eslint/js"
// import globals from "globals"
// import tseslint from "typescript-eslint"
// import pluginReact from "eslint-plugin-react"
// import { defineConfig } from "eslint/config"

// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
//     plugins: { js },
//     extends: ["js/recommended"]
//   },
//   {
//     files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
//     languageOptions: { globals: globals.browser }
//   },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   {
//     env: {
//       browser: true,
//       es2021: true
//     },
//     extends: [
//       "eslint:recommended",
//       "plugin:react/recommended",
//       "plugin:@typescript-eslint/recommended",
//       "plugin:prettier/recommended" // para o prettier
//     ],
//     overrides: [],
//     parser: "@typescript-eslint/parser",
//     parserOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module"
//     },
//     plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
//     rules: {
//       "prettier/prettier": "error", // para o prettier
//       "react-hooks/rules-of-hooks": "error",
//       "react-hooks/exhaustive-deps": "warn",
//       "react/prop-types": "off",
//       "react/react-in-jsx-scope": "off",
//       "@typescript-eslint/explicit-module-boundary-types": "off"
//     },
//     settings: {
//       react: {
//         version: "detect"
//       }
//     }
//   }
// ])
