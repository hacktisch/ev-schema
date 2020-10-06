module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),
    {
        tab: "details",
        source: "body",
        type: "markdown",
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
                type: "image",
                accept: {
                    "image/jpeg": true,
                    "image/webp": "jpg",
                    "image/png": "jpg"
                },
                transforms: {
                    _original: {
                        width: 450,
                        height: 300
                    }
                }
            },
            {
                source: "title",
                label: "Title",
                type: "text"
            },
            {
                source: "text",
                label: "Description",
                type: "markdown"
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
                source: "banner[0]title",
                label: "Banner title",
                type: "text"
            },
            {
                 tab: "media",
                source: "banner[0]desc",
                label: "Banner description",
                type: "longtext"
            },
            {
                 tab: "media",
                source: "banner[0]backgrounds",
                label: "Banner background",
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
        tab: "catalog",
        source: "showCatalog",
        type: "boolean",
        label: "Show product list and filters",
        props: {
            defaultValue: true
        }
    },
    {
        tab: "catalog",
        source: "addCategory",
        type: "reference",
        /////////validate: required
        label: "Product category",
        root: "category",
        filter: { root: "category" },
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

 ...require("./groups/metaTags.js"),
    require("./groups/changed.js")
];
