import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/configs/tests.ts",
		coverage: {
			provider: "istanbul",
			reporter: ["text", "json", "html"],
		},
	},

	// Absolute imports (aliases)
	resolve: {
		alias: [
			{ find: "assets", replacement: "/src/assets" },
			{ find: "components", replacement: "/src/components" },
			{ find: "configs", replacement: "/src/configs" },
			{ find: "hooks", replacement: "/src/hooks" },
			{ find: "layouts", replacement: "/src/layouts" },
		],
	},
});
