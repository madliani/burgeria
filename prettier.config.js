/**
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions}
 */
export default {
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "strict",
    objectWrap: "collapse",
    plugins: [
        "prettier-plugin-astro",
        "prettier-plugin-svelte",
        "prettier-plugin-tailwindcss"
    ],
    printWidth: 80,
    proseWrap: "always",
    quoteProps: "as-needed",
    semi: false,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 4,
    tailwindStylesheet: "./src/styles/config.tw.css",
    trailingComma: "none",
    useTabs: false
}
