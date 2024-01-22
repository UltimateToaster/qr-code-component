import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-purgecss';
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPurge([htmlPurge()]),
  ],
	base: '/qr-code-component/',
	
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
