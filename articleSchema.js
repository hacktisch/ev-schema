module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),
    {
        source: "body",
        type: "richtext",
        label: "Article text"
    },

    {
        source: "image",
        label: "Image",
        type: "image",
        accept: { "image/jpeg": true, "image/webp": "jpg", "image/png": "jpg" },
        transforms: {
            _original: {
                width: 1200,
                height: 800
            }
        }
    },

    require("./groups/metaTags.js"),
    require("./groups/changed.js")
];
