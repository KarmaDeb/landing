import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import compression from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic'
		}), 
		tsconfigPaths(), 
		compression(), 
		WindiCSS()
	],
	base: './',
	build: {
		target: 'esnext',
		minify: 'esbuild',
		sourcemap: false,
		rollupOptions: {
			treeshake: true,
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				}
			}
		}
	}
});