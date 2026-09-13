import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				experimental: {
					async: true,
				},
			},
		}),
		viteSingleFile(),
	],
	server: {
		port: 5178,
	},
});
