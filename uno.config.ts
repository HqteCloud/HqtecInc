import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWebFonts,
	presetWind4,
	transformerDirectives,
} from "unocss";
import type { Preset } from "unocss";

import { breakpoint } from "@unocss/preset-wind4/theme";
import { breakoutFn, breakoutGrid } from "./renderer/styles/presets/breakout";
import { presetShadcnVue } from "./renderer/styles/presets/shadcn";

const presets: Preset[] = [
	presetWind4({
		preflights: {
			theme: "on-demand",
		},
	}),
	presetShadcnVue(),
	presetAttributify(),
	presetWebFonts({
		provider: "google",
		fonts: {
			amsterdam: "New Amsterdam",
			hubot: {
				name: "Hubot Sans",
				weights: ["400", "500", "600", "700"],
			},
			sans: {
				name: "Anek Tamil",
				weights: ["400", "500", "600", "700"],
			},
			mono: ["Chivo Mono", "Chivo Mono:400,500,600"],
		},
	}),
	presetIcons({
		prefix: "i-",
		extraProperties: {
			display: "inline-block",
			"vertical-align": "middle",
		},
		collections: {
			solar: () =>
				import("@iconify-json/solar/icons.json").then(
					(i) => i.default as any,
				),
		},
	}),
	breakoutGrid,
];

export default defineConfig({
	presets,
	shortcuts: {
		"app-scrollbar":
			"[&::-webkit-scrollbar]:w-15px [&::-webkit-scrollbar]:opacity-1 [&::-webkit-scrollbar]:bg-alabaster [&::-webkit-scrollbar-track]:bg-alabaster [&::-webkit-scrollbar-track]:my-4px [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-4 [&::-webkit-scrollbar-thumb]:b-5px [&::-webkit-scrollbar-thumb]:b-solid [&::-webkit-scrollbar-thumb]:b-transparent [&::-webkit-scrollbar-thumb]:bg-clip-content",
		"hide-scrollbar":
			"[scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:opacity-0 [&::-webkit-scrollbar]:transition-all",
		// ------------
		viewport: breakoutFn.defineGrid({
			content: 585,
			containers: [
				{ name: "min", value: 620 },
				{ name: "max", value: 750 },
				{ name: "full", value: 900 },
				{ name: "nav", value: 1260 },
			],
		}),
		"router-link-active": "text-gray-700",
	},
	// ...UnoCSS options
	theme: {
		colors: {
			divider: "#BDBDBD",
			alabaster: "#FBFBFB",
			tertiary: "#2E324C",
			card: {
				2: "#D1D5ED",
				3: '#C3C8E8'
			},
			primary: {
				light: '#C5CAE8'
			}
		},
		breakpoint: {
			...breakpoint,
			xs: "22.5rem",
			// sm: "576px",
			// md: "768px",
			// xmd: "820px",
			// lg: "1024px",
			// xl: "1200px",
			// xxl: "1400px",
		},
		spacing: {
			base: "640px",
			large: "790px",
			container: "900px",
		},
	},
	safelist: ["router-link-active"],
	preflights: [
		{
			layer: "layout",
			getCSS: ({ theme }: any) => /*css*/ `
        :root {
          --boundary: 650px;
          --boundary-bleed: 690px;
        }

        html,body {
          font-family: ${theme.font.sans};
        }

        h1,h2,h3,h4,h5,h6 {
          font-family: ${theme.font.hubot};
          font-weight: 500;
        }
      `,
		},
	],
	layers: {
		layout: -1,
	},
	transformers: [transformerDirectives()],
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|vine.ts|mdx?|astro|elm|php|phtml|html)($|\?)/,
				"components/ui/**/*.{ts,tsx,vue,svelte}",
				"renderer/styles/main.css",
			],
		},
		filesystem: [
			"components/ui/**/*.{ts,tsx,vue,svelte}",
			"renderer/styles/main.css",
		],
	},
});
