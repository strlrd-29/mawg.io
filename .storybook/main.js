module.exports = {
	stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@chakra-ui/storybook-addon',
	],
	framework: '@storybook/react',
	features: {emotionAlias: false},
	core: {
		builder: 'webpack5',
	},
}
