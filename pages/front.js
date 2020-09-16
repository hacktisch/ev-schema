module.exports = [
	{ tab: "banner", source: "title", label: "Title", type: "text" },
	{ tab: "banner", source: "desc", label: "Description", type: "longtext" },
	{
		tab: "banner",
		source: "backgrounds",
		label: "Backgrounds",
		type: "array",
		sub: [
			{
				source: "image",
				label: "Image",
				type: "image",
				accept: {
					"image/jpeg": true,
					"image/webp": "jpg",
					"image/png": "jpg"
				},
				transforms: {
					_original: {
						width: 1920,
						height: 1080
					}
				}
			}
		]
	},

	{
		tab: "banner",
		source: "usp_quality",
		label: "Usp: quality",
		type: "text"
	},
	{
		tab: "banner",
		source: "usp_service",
		label: "Usp: service",
		type: "text"
	},
	{
		tab: "banner",
		source: "usp_guarantee",
		label: "Usp: guarantee",
		type: "text"
	},
	{
		tab: "banner",
		source: "usp_experience",
		label: "Usp: experience",
		type: "text"
	},

	{
		tab: "order_process",
		source: "process_title",
		type: "text"
	},
	{
		tab: "order_process",

		source: "process",
		label: "Steps",
		type: "array",
		min: 3,
		max: 3,
		sub: [
			{
				source: "image",
				label: "Image",
				type: "image",
				accept: { "image/png": true, "image/webp": "png" },
				transforms: {
					_original: {
						width: 300,
						height: 300
					}
				}
			}
		]
	},
	{
		tab: "product_selection",

		source: "selection_title",
		label: "Title above products",
		type: "text"
	},
	{
		tab: "logo_bar",

		source: "logos",
		label: "Logos",
		type: "array",
		sub: [
			{
				source: "image",
				label: "Logo",
				type: "image",
				accept: { "image/png": true, "image/webp": "png" },
				transforms: {
					_original: {
						width: 400,
						height: 100
					}
				}
			}
		]
	},
	{
		tab: "text",

		source: "body",
		label: "Body text",
		type: "richtext"
	},
	{
		tab: "text",

		source: "button_contact",
		label: "Text in contact button",
		type: "text"
	},
	{
		tab: "text",

		source: "button_order",
		label: "Text in order button",
		type: "text"
	},

	require("../groups/metaTags.js")
];
