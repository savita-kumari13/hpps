// pages/api/revalidate.js

import { currentLocale } from '../../lib/common';

export default async function handler(req, res) {
	// const locale = currentLocale(req);
	// check for POST request
	if (req.method !== 'POST') {
		res.status(400).json({ error: 'Invalid HTTP method. Only POST requests are allowed.' });
	}

	// console.log('req.query.secret------- ', req.query.secret);
	// console.log('process.env.REVALIDATE------- ', process.env.REVALIDATE);

	// check for secret token
	if (req.query.secret !== process.env.REVALIDATE) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	// check that body is not emppty
	const body = req.body;
	if (!body) {
		res.status(400).json('Bad request (no body)');
		return;
	}

	// get the slug to revalidate from body
	try {
		const slugToRevalidate = body.slugToRevalidate;

		console.log('slugToRevalidate------- ', slugToRevalidate);

		const locale = body.locale;

		console.log('locale------- ', locale);

		if (slugToRevalidate) {
			console.log('if --- slugToRevalidate------- ');
			let path = `/posts/${slugToRevalidate}`;
			if (locale !== 'en-US') {
				path = `/${locale}/posts/${slugToRevalidate}`;
			}
			console.log('path  ', path);
			await res.unstable_revalidate(`/es/posts/${slugToRevalidate}`);
			return res.json({ revalidated: true });
		}
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		console.log('CATCHHHHH');
		return res.status(500).send('Error revalidating');
	}
}
