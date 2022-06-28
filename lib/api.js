const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;

async function fetchGraphQL(query, preview = false) {
	return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({ query }),
	}).then((response) => response.json());
}

function extractPost(fetchResponse) {
	return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
	return fetchResponse?.data?.postCollection?.items.filter((item) => {
		if (item.slug) return item;
	});
}

export async function getPreviewPostBySlug(slug) {
	const entry = await fetchGraphQL(
		`query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		true
	);
	return extractPost(entry);
}

export async function getAllPostsWithSlug(locale) {
	const entries = await fetchGraphQL(
		`query {
      postCollection(where: { slug_exists: true }, order: date_DESC, locale: "${locale}") {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
	);
	// console.log('getAllPostsWithSlug locale----', locale);

	// console.log('getAllPostsWithSlug ----', entries.data);
	return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview, locale) {
	console.log('locale getAllPostsForHome----', locale);
	const entries = await fetchGraphQL(
		`query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}, locale: "${locale}") {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	);
	// console.log('getAllPostsForHome---- ', entries.data.postCollection.items);

	return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview, locale) {
	const entry = await fetchGraphQL(
		`query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1, locale: "${locale}") {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	);
	const entries = await fetchGraphQL(
		`query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${preview ? 'true' : 'false'}, limit: 2, locale: "${locale}") {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	);
	return {
		post: extractPost(entry),
		morePosts: extractPostEntries(entries),
	};
}
