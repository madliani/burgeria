import sitemapIntegration from "@astrojs/sitemap"
import svelteIntegration from "@astrojs/svelte"
import { defineConfig } from "astro/config"

const DEFAULT_PORT = 4321

const integrations = [svelteIntegration(), sitemapIntegration()]
const port = Number.parseInt(process.env.ASTRO_PORT) ?? DEFAULT_PORT

/** @type {import("astro").AstroConfig} */
export default defineConfig({
    base: "/",
    devToolbar: { enabled: true },
    integrations: [...integrations],
    prefetch: { defaultStrategy: "tap" },
    server: { host: true, open: true, port: port },
    site: "https://burgeria.vercel.app/"
})
