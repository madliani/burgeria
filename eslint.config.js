import pluginJS from "@eslint/js"
import pluginJSON from "@eslint/json"
import pluginHtmlSvelte from "@html-eslint/eslint-plugin-svelte"
import pluginVitest from "@vitest/eslint-plugin"
import { configs as astroConfigs } from "eslint-plugin-astro"
import pluginCompat from "eslint-plugin-compat"
import pluginImport from "eslint-plugin-import"
import pluginNode from "eslint-plugin-n"
import pluginNoSecrets from "eslint-plugin-no-secrets"
import { configs as perfectConfigs } from "eslint-plugin-perfectionist"
import pluginNodeSecurity from "eslint-plugin-security"
import pluginSvelte from "eslint-plugin-svelte"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import { configs as tsConfigs } from "typescript-eslint"

/**
 * @type {import("eslint/config").Config}
 */
export default defineConfig([
    {
        extends: [
            pluginJS.configs.recommended,
            tsConfigs.eslintRecommended,
            tsConfigs.strict,
            tsConfigs.stylistic,
            perfectConfigs["recommended-alphabetical"],
            pluginImport.flatConfigs.recommended,
            pluginImport.flatConfigs.typescript,
            pluginCompat.configs["flat/recommended"]
        ],
        files: ["*.config.js", "**/*.{astro,svelte,ts}"],
        languageOptions: {
            ecmaVersion: 2022,
            parserOptions: {
                allowReserved: false,
                ecmaFeatures: { globalReturn: false, impliedStrict: true }
            },
            sourceType: "module"
        },
        plugins: { "no-secrets": pluginNoSecrets },
        settings: {
            "import/order": "off",
            "import/resolver": { typescript: true },
            "no-secrets/no-pattern-match": "error",
            "no-secrets/no-secrets": "error",
            "sort-imports": "off"
        }
    },
    {
        extends: [
            pluginNode.configs["flat/recommended-module"],
            pluginNodeSecurity.configs.recommended
        ],
        files: ["*.config.js"],
        languageOptions: { globals: { ...globals.node } },
        settings: { "import/resolver": { node: true } }
    },
    {
        files: ["**/*.{astro,svelte,ts}"],
        languageOptions: { globals: { ...globals.browser } }
    },
    {
        extends: [
            astroConfigs["flat/recommended"],
            astroConfigs["flat/jsx-a11y-strict"]
        ],
        files: ["**/*.astro"],
        settings: {
            "import/core-modules": ["astro:assets", "astro:transitions"]
        }
    },
    {
        extends: [
            pluginSvelte.configs["flat/recommended"],
            pluginSvelte.configs["flat/prettier"],
            pluginHtmlSvelte.configs.recommended
        ],
        files: ["**/*.svelte", "**/*.svelte.ts"]
    },
    {
        extends: [pluginVitest.configs.recommended],
        files: ["**/*.test.ts", "**/*.mock.ts"],
        languageOptions: {
            globals: { ...pluginVitest.environments.env.globals }
        }
    },
    {
        extends: [pluginJSON.configs.recommended],
        files: ["**/*.json"],
        language: "json/json",
        rules: { "json/sort-keys": "error" }
    },
    {
        extends: [pluginJSON.configs.recommended],
        files: ["**/*.jsonc"],
        language: "json/jsonc",
        rules: { "json/sort-keys": "error" }
    },
    globalIgnores([
        "./.astro/",
        "./coverage/",
        "./dist/",
        "./html/",
        "./node_modules/",
        "package-lock.json"
    ])
])
