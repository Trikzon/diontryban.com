import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.md'],
		highlight: {
			highligher: (code, lang='text') => {
				// const highligher = await shiki.getHighlighter({ theme: 'poimandres' });
				// const html = escapeSvelte(highligher.codeToHtml(code, { lang }));
				// return `{@html \`${html}\`}`;
				return lang;
			}
		},
		rehypePlugins: [rehypeSlug]
	})],

	extensions: ['.svelte', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
