// const { i18n } = require('./next-i18next.config');
module.exports = {
	images: {
		loader: 'custom',
	},
	// i18n,
	// i18n: {
	// 	locales,
	// 	defaultLocale: sourceLocale,
	// 	// locales: ['en-US', 'es'],
	// 	// defaultLocale: 'en-US',
	// },
	i18n: {
		locales: ['en-US', 'es'],
		defaultLocale: 'en-US',
	},
};
