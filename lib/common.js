import { acceptLanguage } from 'next/dist/server/accept-header';
import { i18n } from '../next.config';

export function currentLocale(req) {
	if (!i18n) return '';
	const chosenLocale = i18n.locales.find((locale) => locale == req.cookies.NEXT_LOCALE);
	console.log('chosenLocale ', chosenLocale);
	const detectedLocale = chosenLocale ?? acceptLanguage(req.headers['accept-language'], i18n.locales);
	console.log('detectedLocale ', detectedLocale);

	return detectedLocale || i18n.defaultLocale;
}
