// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['@/assets/css/main.css'],
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
});