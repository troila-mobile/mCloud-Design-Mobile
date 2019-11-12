/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const RemarkablePlugins = require('./core/RemarkablePlugins')

// List of projects/orgs using your project for the users page.
const users = [
	{
		caption: 'User1',
		// You will need to prepend the image path with your baseUrl
		// if it is not '/', like: '/test-site/img/image.jpg'.
		image: '/img/undraw_open_source.svg',
		infoLink: 'https://www.facebook.com',
		pinned: true,
	},
];

const siteConfig = {
	title: 'mCloud Design Mobile', // Title for your website.
	tagline: '一个基于 React Native 的 UI 组件库',
	url: 'https://troila-mobile.github.io', // Your website URL
	baseUrl: '/mCloud-Design-Mobile/', // Base URL for your project */
	// For github.io type URLs, you would set the url and baseUrl like:
	//   url: 'https://facebook.github.io',
	//   baseUrl: '/test-site/',

	// Used for publishing and more
	projectName: 'mCloud-Design-Mobile',
	organizationName: 'troila-mobile',

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{ doc: 'index', label: 'Docs' },
		{ doc: 'Button', label: 'API' },
		{ page: 'help', label: 'Help' },
		{ blog: true, label: 'Blog' },
	],

	// If you have users set above, you add it here:
	users,

	/* path to images for header/footer */
	headerIcon: 'img/favicon.png',
	footerIcon: 'img/favicon.png',
	favicon: 'img/favicon.png',

	/* Colors for website */
	colors: {
		primaryColor: '#586BFB',
		secondaryColor: '#3c0b79',
	},

	/* Custom fonts for website */
	/*
  fonts: {
	myFont: [
	  "Times New Roman",
	  "Serif"
	],
	myOtherFont: [
	  "-apple-system",
	  "system-ui"
	]
  },
  */

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default',
	},
	markdownPlugins: [
		RemarkablePlugins.SnackPlayer,
		// RemarkablePlugins.ReactNativeWebPlayer,
	],
	// Add custom scripts here that would be placed in <script> tags.
	scripts: [
		'https://snack.expo.io/embed.js',
		'https://buttons.github.io/buttons.js',
		'/js/codeblocks.js',
	],

	// On page navigation for the current documentation page.
	onPageNav: 'separate',
	// No .html extensions for paths.
	cleanUrl: true,

	// Open Graph and Twitter card images.
	ogImage: 'img/undraw_online.svg',
	twitterImage: 'img/undraw_tweetstorm.svg',
	// For sites with a sizable amount of content, set collapsible to true.
	// Expand/collapse the links and subcategories under categories.
	// docsSideNavCollapsible: true,

	// Show documentation's last contributor's name.
	// enableUpdateBy: true,

	// Show documentation's last update time.
	// enableUpdateTime: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	repoUrl: 'https://github.com/troila-mobile/mCloud-Design-Mobile',
};

module.exports = siteConfig;
