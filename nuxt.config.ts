// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
	devtools: { enabled: true },

  css: ["@/assets/main.css"],

	build: {
		transpile: ["vuetify"],
	},

	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
		"@pinia/nuxt",
		"@nuxtjs/color-mode",
	],

	routeRules: {
		"/backEnd/**": {
			proxy: { to: "https://www.fotmob.com/api/**" },
			cors: true,
		},
	},

	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
});
