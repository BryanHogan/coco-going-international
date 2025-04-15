// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CoCo International',
			social: [{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/codeandcontext/' }],
			customCss: [
				'./src/styles/custom.css',
			],
			logo: {
				src: "./src/assets/CoCo-Logo.svg",
			},
			sidebar: [
				{
					label: 'Incomings',
					items: [
						{ label: 'Incomings Information', link: '/incomings/exchange-at-coco' },
						{ label: 'Courses', link: '/incomings/courses' },
					],
				},
				{
					label: 'Outgoings',
					items: [
						{ label: 'Outgoings Information', link: '/outgoings/semester-abroad' },
					],
				},
				{
					label: 'More',
					items: [
						{ label: 'More', link: '/more/more' },
					],
				},
			],
		}),
	],
});
