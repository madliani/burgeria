/** @type {import("stylelint").Config} */
export default {
    allowEmptyInput: true,
    cache: true,
    defaultSeverity: "error",
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-clean-order",
        "stylelint-config-astro"
    ],
    fix: true,
    maxWarnings: 0,
    plugins: ["stylelint-no-unsupported-browser-features"],
    rules: {
        "plugin/no-unsupported-browser-features": [
            true,
            { ignore: ["css-cascade-layers", "css-nesting"], severity: "error" }
        ],
        "scss/at-rule-no-unknown": null
    }
}
