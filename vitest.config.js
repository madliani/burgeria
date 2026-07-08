import { configDefaults, defineConfig } from "vitest/config"

const PORT = 51204

export default defineConfig({
    plugins: [],
    resolve: { tsconfigPaths: true },
    server: { host: true, open: true, port: PORT },
    test: {
        ...configDefaults,
        coverage: {
            enabled: false,
            provider: "v8",
            reporter: ["html", "lcov"]
        },
        environment: "happy-dom",
        globals: false,
        globalSetup: [],
        include: ["./src/**/*.test.ts"],
        name: "burgeria",
        passWithNoTests: true,
        reporters: ["default", "html"],
        setupFiles: []
    }
})
