import { acceptLanguage } from 'next/dist/server/accept-header';
import { i18n } from '../next.config';

export function currentLocale(req) {
	if (!i18n) return '';
	const chosenLocale = i18n.locales.find((locale) => locale == req.cookies.NEXT_LOCALE);
	const detectedLocale = chosenLocale ?? acceptLanguage(req.headers['accept-language'], i18n.locales);
	return detectedLocale || i18n.defaultLocale;
}
