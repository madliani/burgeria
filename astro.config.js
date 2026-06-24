import sitemapIntegration from "@astrojs/sitemap"
import svelteIntegration from "@astrojs/svelte"
import twVitePlugin from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

const PORT = 4321

const integrations = [svelteIntegration(), sitemapIntegration()]

const vitePlugins = [twVitePlugin()]

/** @type {import("astro").AstroConfig} */
export default defineConfig({
    base: "/",
    devToolbar: { enabled: true },
    integrations: [...integrations],
    prefetch: { defaultStrategy: "tap" },
    server: { host: true, open: true, port: PORT },
    site: "https://burgeria.vercel.app/",

    vite: { plugins: [...vitePlugins] }
})
