export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt-ts-eslint',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/scss/main.scss'],
	pageTransition: 'main-transition',

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'nuxt-i18n'
	],
	eslint: {
		formatter: 'codeframe'
	},
	extends: ['@nuxtjs/eslint-config-typescript'],
	typescript: {
		typeCheck: {
			eslint: {
				files: './**/*.{ts,js,vue}'
			}
		}
	},
	i18n: {
		baseUrl: 'https://www.nanofibers.tech',
		strategy: 'prefix_and_default',
		seo: true,
		lazy: true,
		defaultLocale: 'en',
		langDir: 'locales/',
		locales: [
			{ code: 'en', iso: 'en', file: 'en.js' },
			{ code: 'ru', iso: 'ru', file: 'ru.js' }
		],
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			onlyOnRoot: false
		}
	},
	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
