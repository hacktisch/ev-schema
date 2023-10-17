module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),
    {

        source: "knowledge_base",
        label: "This article is for the knowledge base",
        type: "boolean"
    },
    {
        source: "body",
        type: "markdown",
        label: "Article text"
    },


    {
        source: "image",
        label: "Image",
        type: "image",
        accept: { "image/jpeg": true, "image/webp": "jpg", "image/png": "jpg" },
        /*transforms: {
            _original: {
                width: 1200,
                height: 800
            }
        }*/
    },

    ...require("./groups/metaTags.js"),
    {
        tab: "meta",
        source: "nocrawl",
        label: "Tell search engines not to crawl this article",
        type: "boolean",
        props:{
         warnWhen:[true]
        }
    },
    require("./groups/changed.js")
];
