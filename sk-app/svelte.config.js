import { optimizeImports } from 'carbon-preprocess-svelte'
import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), optimizeImports()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node({
			// default options are shown
			out: 'build'
		}),
		paths: {
			assets: 'node_modules/carbon-components-svelte/css'
		},
		vite: {
			optimizeDeps: {
				// Include to fix cliboard-copie issue: https://github.com/IBM/carbon-components-svelte/issues/595#issuecomment-824562588
				include: ['clipboard-copy']
			},
		},
	},
}
