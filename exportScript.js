const contentfulExport = require('contentful-export');
const fs = require('fs');

const options = {
	spaceId: 'dc1f0gwitt8g',
	environmentId: 'master',
	managementToken: '_xicFK0qItcfe6DNgOOP9X_XwTvWxBQDHIUTqDzsWow',
	deliveryToken: '_2z-1O4WxZQQZcOnR9V6W8oCYUQZWa0scMlI7eL62UM',
	exportDir: '/Users/sakumari',
	saveFile: true,
	contentFile: 'export.json',
	includeDrafts: false,
	includeArchived: false,
	skipContentModel: false,
	skipContent: false,
	skipRoles: true,
	skipWebhooks: true,
	contentOnly: true,
	queryEntries: ['content_type=post'],
	queryAssets: ['sys.id=0000'],
	downloadAssets: false,
	host: 'api.contentful.com',
	errorLogFile: '/Users/sakumari/error.log',
	useVerboseRenderer: false,
};

const entries = [
	{
		fields: {
			title: {
				en: 'aaa',
				es: 'bbb',
			},
			slug: {
				en: 'aaa slug',
				es: 'bbb slug',
			},
			content: {
				en: 'aaa content',
				es: 'bbb content',
			},
		},
	},
];

const aa = {
	entries: [
		{
			metadata: {
				tags: [],
			},
			sys: {
				space: {},
				id: '',
				type: '',
				createdAt: '',
				updatedAt: '',
				environment: {},
				revision: 23,
				contentType: {},
			},
			fields: {
				title: {
					'en-US': '',
				},
				slug: {
					'en-US': '',
				},
				content: {
					'en-US': {},
				},
				excerpt: {
					'en-US': '',
				},
				coverImage: {
					'en-US': {},
				},
				date: {
					'en-US': '',
				},
				author: {
					'en-US': {},
				},
				locReady: {
					'en-US': true,
				},
			},
		},
	],
	assets: [],
};

contentfulExport(options)
	.then((result) => {
		console.log('Your space data:', result);
		const fileName = '/Users/sakumari/export.json';
		const file = require(fileName);
		// const picked = ((aa) => aa)(file);

		// fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
		// 	if (err) return console.log(err);
		// console.log(JSON.stringify(picked));
		// const newFile = file.entries.forEach();
		// console.log('writing to ' + newFile);
		// });
	})
	.catch((err) => {
		console.log('Oh no! Some errors occurred!', err);
	});

// const fileName = '/Users/sakumari/export.json';
// const file = require(fileName);
// // console.log(file.entries);

// console.log('writing to ' + JSON.stringify(file));
