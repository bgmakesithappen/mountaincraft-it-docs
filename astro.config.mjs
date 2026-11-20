// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// TODO(PLAN P1): set `site` once the domain is decided, e.g. https://it-docs.<domain>
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mountaincraft IT Docs',
			description: 'Services, network, runbooks and policies maintained by the Mountaincraft Makerspace IT team.',
			// TODO(PLAN P1): enable once the repo exists in the org GitHub.
			// editLink: { baseUrl: 'https://github.com/<org>/it-docs/edit/main/' },
			lastUpdated: true,
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{ label: 'Start here', items: [{ autogenerate: { directory: 'start-here' } }] },
				{ label: 'Services', items: [{ autogenerate: { directory: 'services' } }] },
				{ label: 'Network', items: [{ autogenerate: { directory: 'network' } }] },
				{ label: 'Hardware', items: [{ autogenerate: { directory: 'hardware' } }] },
				{ label: 'Runbooks', items: [{ autogenerate: { directory: 'runbooks' } }] },
				{ label: 'Policies', items: [{ autogenerate: { directory: 'policies' } }] },
				{ label: 'Decisions', items: [{ autogenerate: { directory: 'decisions' } }] },
			],
		}),
	],
});
