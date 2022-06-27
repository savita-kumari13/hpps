import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

export default function Index({ preview, allPosts, locale, locales }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	// console.log('allPosts ++++', allPosts);
	console.log('allPosts -----', allPosts);

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
				</Head>
				<Container>
					<Intro />
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ locale, locales, preview = false }) {
	const allPosts = (await getAllPostsForHome(preview, locale)) ?? [];
	// console.log('allPosts -----', allPosts);
	// console.log('locales -----', locales);

	if (allPosts.length === 0) {
		return {
			notFound: true,
		};
	}
	return {
		props: { preview, allPosts, locale, locales },
	};
}
