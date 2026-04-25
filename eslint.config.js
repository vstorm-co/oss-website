import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    rules: {
      // Ban <img> in Astro components — use <Image> or <Figure>.
      "no-restricted-syntax": [
        "warn",
        {
          selector: "JSXOpeningElement[name.name='img']",
          message: "Use <Image> from astro:assets or the <Figure> component instead of <img>.",
        },
      ],
      // Soften rules with many pre-existing violations in legacy oss-website
      // code so the linter is signal, not noise. Tighten back per-file as
      // touched, or globally once the legacy debt is paid down.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unsafe-function-type": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "no-empty": ["warn", { allowEmptyCatch: true }],
      "no-useless-assignment": "warn",
      "jsx-a11y/label-has-associated-control": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    // Inline scripts inside .astro files run in the browser context — give
    // them browser globals so `process`/`URL`/`document` aren't flagged.
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        fetch: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        IntersectionObserver: "readonly",
        MutationObserver: "readonly",
        ResizeObserver: "readonly",
        location: "readonly",
        history: "readonly",
        sessionStorage: "readonly",
        localStorage: "readonly",
        process: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
      },
    },
  },
  {
    // Node config files run in Node, not the browser — give them Node globals.
    files: ["**/*.config.{mjs,ts,js}", "scripts/**/*.{ts,js,mjs}", "**/vite-plugin.ts"],
    languageOptions: {
      globals: {
        process: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
  },
  {
    ignores: ["dist/", "node_modules/", ".astro/", "public/templates.json"],
  },
];
