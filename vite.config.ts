import path from 'node:path'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import hybridly from 'hybridly/vite'
import hybridlyImports from 'hybridly/auto-imports'
import hybridlyResolver from 'hybridly/resolver'
import autoimport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import iconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import icons from 'unplugin-icons/vite'
import vue from '@vitejs/plugin-vue'
import run from 'vite-plugin-run'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import { MasterCSSVitePlugin } from '@master/css.vite'

export default defineConfig({
	plugins: [
		laravel({
			input: 'resources/application/main.ts',
			// valetTls: true,
		}),
		run([
			{
				run: ['php', 'artisan', 'hybridly:i18n'],
				condition: (file) => ['lang/'].some((kw) => file.includes(kw)),
			},
			{
				run: ['php', 'artisan', 'typescript:transform'],
				condition: (file) => ['Data.php', 'Enums/'].some((kw) => file.includes(kw)),
			},
		]),
		hybridly(),
		vue(),
        MasterCSSVitePlugin({
            include: [
                'resources/**/*.vue',
                'resources/**/*.blade.php',
            ]
        }),
		i18n({
			include: path.resolve(__dirname, './resources/i18n/locales.json'),
		}),
		icons({
			autoInstall: true,
			customCollections: {
				custom: FileSystemIconLoader('./resources/icons'),
			},
		}),
		components({
			dirs: [
				'./resources/views/components',
			],
			resolvers: [
				hybridlyResolver(),
				iconsResolver({
					customCollections: ['custom'],
				}),
			],
			directoryAsNamespace: true,
			dts: 'resources/types/components.d.ts',
		}),
		autoimport({
			dts: 'resources/types/auto-imports.d.ts',
			vueTemplate: true,
			imports: [
				'vue',
				'@vueuse/core',
				'@vueuse/head',
				hybridlyImports,
			],
			dirs: [
				'./resources/composables',
				'./resources/utils',
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.join(process.cwd(), 'resources'),
		},
	},
})
