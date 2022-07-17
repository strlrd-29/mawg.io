// import theme from '@/styles/theme'
import * as NextImage from 'next/image'
import '../styles/globals.css'
const theme = require('../styles/theme')
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: props => (
		<OriginalNextImage
			{...props}
			unoptimized
		/>
	),
})

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	chakra: {
		theme,
		resetCSS: true,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
