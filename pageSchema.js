module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),
    {
        tab: "details",
        source: "body",
        type: "richtext",
        label: "Long description"
    },
    {
        tab: "details",
        source: "seoLinks",
        type: "array",
        sub: [
            {
                source: "image",
                label: "Image",
                type: "image"
            },
            {
                source: "title",
                label: "Title",
                type: "text"
            },
            {
                source: "text",
                label: "Description",
                type: "longtext"
            },
            {
                source: "path",
                type: "reference",
                label: "Path",
                reference: {
                    resource: "path",
                    optionText: "path",
                    inputType: "autocomplete"
                }

                ///////////  validate: required
            },
            {
                source: "sublinks",
                type: "array",
                label: "Sub-links",
                sub: [
                    {
                        source: "path",
                        type: "reference",
                        label: "Path",
                        reference: {
                            resource: "path",
                            optionText: "path",
                            inputType: "autocomplete"
                        }

                        ///////////  validate: required
                    },
                    {
                        source: "title",
                        label: "Title",
                        type: "text"
                    }
                ]
            }
        ]
    },
    {
        tab: "media",
        source: "banner",
        label: "Banner texts",
        type: "array",
        min: 1,
        max: 1,
        sub: [
            {
                source: "title",
                label: "Title",
                type: "text"
            },
            {
                source: "desc",
                label: "Description",
                type: "longtext"
            },
            {
                source: "backgrounds",
                label: "Backgrounds",
                type: "array",
                sub: [{ source: "image", label: "Image", type: "image" }]
            }
        ]
    },

    {
        tab: "catalog",
        source: "addCategory",
        type: "reference",
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
        source: "addSentence",
        type: "text"
    },

    require("./groups/metaTags.js"),
    require("./groups/changed.js")
];
