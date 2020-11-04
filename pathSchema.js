module.exports = [
	{
		source: "path",
		type: "text",
		label: "Path",
		validate: [
			"required",
			{
				type: "regex",
				pattern: "^[a-zA-Z0-9-]([/]?[a-zA-Z0-9-]+)*$",
				message:
					"Only alphanumerical characters and hyphens allowed. Do not start or end with a slash. Double slashes (//) not allowed."
			}
		]
	},
	{
		
		source: "product_id",
		type: "reference",
		label: "Product",
		reference: {
			resource: "product",
			optionText: "title"
		}
	},
	{
		
		source: "page_id",
		type: "reference",
		label: "Page",
		reference: {
			resource: "page",
			optionText: "title"
		}
	},
	{
		
		source: "article_id",
		type: "reference",
		label: "Article",
		reference: {
			resource: "article",
			optionText: "title"
		}
	}
];
