import { NextResponse } from 'next/server';

// Set pathname were middleware will be executed
export const config = {
	matcher: '/',
};

export function middleware(req) {
	// Get country
	const country = req.geo.country?.toLowerCase() || 'us';

	console.log('country ------- ', country);

	// Update pathname
	req.nextUrl.pathname = `/${country}`;

	// Rewrite to URL
	return NextResponse.rewrite(req.nextUrl);
}
