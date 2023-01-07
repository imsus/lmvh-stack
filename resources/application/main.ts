import { initializeHybridly } from 'hybridly/vue'
import { createHead } from '@vueuse/head'
import i18n from './i18n'
import 'virtual:hybridly/router'
import './tailwind.css'

initializeHybridly({
	pages: import.meta.glob('@/views/pages/**/*.vue', { eager: true }),
	enhanceVue: (vue) => {
		vue.use(createHead())
		vue.use(i18n)
	},
})
