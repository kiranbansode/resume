import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},

	// Absolute imports (aliases)
	resolve: {
		alias: [
			{ find: 'assets', replacement: '/src/assets' },
			{ find: 'components', replacement: '/src/components' },
			{ find: 'configs', replacement: '/src/configs' },
			{ find: 'hooks', replacement: '/src/hooks' },
			{ find: 'layouts', replacement: '/src/layouts' },
		],
	},
});
