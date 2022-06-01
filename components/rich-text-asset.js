import Image from 'next/image';

const contentfulLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

export default function RichTextAsset({ id, assets }) {
	const asset = assets?.find((asset) => asset.sys.id === id);

	if (asset?.url) {
		return <Image src={asset.url} layout='responsive' width={'100%'} height={100} alt={asset.description} loader={contentfulLoader} />;
	}

	return null;
}
