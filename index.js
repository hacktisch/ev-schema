module.exports = {
	article: require("./articleSchema.js"),
	path: require("./pathSchema.js"),
	tree: require("./treeSchema.js"),
	product: require("./productSchema.js"),
	page: require("./pageSchema.js"),
	settings: require("./settingsSchema.js"),
	structure: require("./structure.js"),

	front: require("./pages/front.js"),
	contact: require("./pages/contact.js"),
	quote_requested: require("./pages/quote_requested.js")
};
