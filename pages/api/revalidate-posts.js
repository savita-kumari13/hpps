// pages/api/revalidate.js

export default async function handler(req, res) {
	// check for POST request
	if (req.method !== 'POST') {
		res.status(400).json({ error: 'Invalid HTTP method. Only POST requests are allowed.' });
	}

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

		const locale = body.locale;

		if (slugToRevalidate) {
			let path = `/posts/${slugToRevalidate}`;
			let rootPath = `/`;
			if (locale !== 'en-US') {
				rootPath = `/${locale}`;
				path = `/${locale}/posts/${slugToRevalidate}`;
			}
			await res.unstable_revalidate(`${rootPath}`);
			await res.unstable_revalidate(`${path}`);
			return res.json({ revalidated: true });
		}
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send('Error revalidating');
	}
}
