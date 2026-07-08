import { configDefaults, defineConfig } from "vitest/config"

const DEFAULT_PORT = 51204

const port = Number.parseInt(process.env.VITEST_PORT) ?? DEFAULT_PORT

export default defineConfig({
    plugins: [],
    resolve: { tsconfigPaths: true },
    server: { host: true, open: true, port: port },
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
