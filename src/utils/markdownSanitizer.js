const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
	const turndownSerivce = new TurndownService();

	//1. convert markdown to html
	const convertedHtml = marked.parse(markdownContent);

	//2. Sanitize HTML
	const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
		allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]), // <script> is not in the list of default allowed tags, you can add it manually if you dont want script tag to be removed
	});

	//3. Convert this sanitized html back to markdown to get sanitized markdown
	const sanitizedMarkdown = turndownSerivce.turndown(sanitizedHtml);
	return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;

//===================================
//Example
//====================================
// const input = `
// # Hello world

// ### this is a markdown

// - something

// <script>alert('yeeeee')</script>

// [Link](www.google.com)
// `;

// const x = sanitizeMarkdownContent(input);
// console.log(x);
//1. It will be converted to HTML
//2. It will remove the <script> tag from html
