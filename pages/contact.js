module.exports = [


	{ type: "text", source: "title", label: "Title" },
	{
		source: "header_img",
		label: "Top image",

		type: "image",
		accept: {
			"image/jpeg": true,
			"image/webp": "jpg",
			"image/png": "jpg"
		},
		transforms: {
			_original: {
				width: 1500,
				height: 500
			}
		}
	},
	{ type: "markdown", source: "body", label: "Body text" },
	{ type: "markdown", source: "contact_info", label: "Contact info" },
	{ type: "markdown", source: "address", label: "Address info" },
	{
		type: "array",

		source: "team",
		label: "Team",
		sub: [
			{
				source: "portrait",
				label: "Portrait photo",

				type: "image",
				accept: {
					"image/jpeg": true,
					"image/webp": "jpg",
					"image/png": "jpg"
				},
				transforms: {
					_original: {
						width: 500,
						height: 500
					}
				}
			},
			{
				source: "name",
				label: "Name",
				type: "text"
			},
			{
				source: "role",
				label: "Job description",
				type: "text"
			},
			{
				source: "bio",
				label: "Bio",
				type: "markdown"
			}
		]
	},


 ...require("../groups/metaTags.js"),
];
