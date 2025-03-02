import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import compression from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		react(), 
		tsconfigPaths(), 
		compression(), 
		WindiCSS()
	],
	base: './',
	build: {
		target: 'esnext',
		sourcemap: false
	}
});