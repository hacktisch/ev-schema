module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),
    {
        tab: "details",
        source: "lead",
        type: "longtext"
    },
    {
        tab: "details",
        source: "blurb",
        type: "text"
    },
    {
        tab: "details",
        source: "body",
        type: "markdown",
        label: "Long description"
    },
    {
        tab: "media",
        label: "Main image",
        source: "mainImage",
        type: "image",
        accept: { "image/jpeg": true, "image/webp": "jpg", "image/png": "jpg" },
        transforms: {
            _original: {
                width: 700,
                height: 470
            }
        }
        /////////validate: required
    },
  

    {
        tab: "media",
        source: "slides",
        type: "array",
        mode: "mediaplayer",
        sub: [
            {
                when: ["!image"],
                source: "url",
                label: "Youtube URL",
                type: "text"
            },
            {
                when: ["!url"],
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
                        width: 700,
                        height: 470
                    }
                }
            }
        ]
    },

    {
        tab: "catalog",
        source: "price",
        type: "number",
        render: "price"
    },
    {
        tab: "catalog",
        source: "priceOnRequest",
        type: "boolean"
    },
    {
        tab: "details",
        source: "reviews",
        type: "array",
        sub: [
            {
                source: "author",
                type: "text"
            },
            {
                source: "rating",
                type: "number"
            },
            {
                source: "text",
                type: "longtext"
            }
        ]
    },
    {
        tab: "details",
        source: "titleOverwritten",
        type: "text"
    },
    {
        tab: "details",
        source: "songs",
        type: "array",
        sub: [
            {
                source: "title",
                type: "text"
            },
            {
                source: "artist",
                type: "text"
            }
        ]
    },
    {
        tab: "catalog",
        source: "weight",
        type: "number"
    },
    {
        tab: "catalog",
        source: "isPartner",
        type: "boolean"
    },
    {
        tab: "catalog",
        source: "category",
        type: "reference",
        multiple: "true",
        /////////validate: required
        label: "Category",
        root: "main",
        filter: { root: "main" },
        reference: {
            resource: "tree",
            optionText: "text"
        }
    },
    {
        tab: "catalog",
        source: "occasion",
        type: "reference",
        multiple: "true",
        label: "Occasion",
        root: "occasion",
        filter: { root: "occasion" },
        reference: {
            resource: "tree",
            optionText: "text"
        }
    },
    {
        tab: "catalog",
        source: "genre",
        type: "reference",
        multiple: "true",
        label: "Genre",
        root: "genre",
        filter: { root: "genre" },
        reference: {
            resource: "tree",
            optionText: "text"
        }
    },

    /*
 /*{
        source:"related",
        refs
    },*/

    require("./groups/metaTags.js"),
    require("./groups/changed.js")
];
