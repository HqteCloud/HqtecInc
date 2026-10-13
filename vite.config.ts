import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { vercel } from "vite-plugin-vercel/vite";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";

import vike from "vike/plugin";
import { UserConfig } from "vite";
import path from "path";

const config: UserConfig = {
	plugins: [
		vue(),
		vueJsx(),
		vike(),
		vercel(),
		UnoCSS(),
		AutoImport({
			imports: [
				"vue",
				"@vueuse/core",
				{
					pinia: ["storeToRefs", "defineStore"],
				},
			],
			dirs: ["./composables/**"],
		}),
		Components({
			dirs: ["./components"],
		}),
		ViteImageOptimizer({
			png: { quality: 80 },
			jpeg: { quality: 75 },
			webp: { quality: 80 },
			avif: { quality: 70 },
			svg: {
				plugins: [
					{ name: "removeViewBox" },
					{ name: "sortAttrs" },
				],
			},
		}),
	],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
			"@plugins": path.resolve(__dirname, "./renderer/plugins"),
		},
	},

	server: {
		allowedHosts: true,
	},
};

export default config;
