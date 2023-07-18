module.exports = [
    { label: "Page title", type: "text", source: "title" },
    require("../groups/pathReference.js"),
    {

        source: "cases",
        label: "Cases",
        type: "array",
        sub: [

            {

                label: "Logo",
                help: "Only for cases for companies with logo to be shown in the logo overview",
                source: "logo",
                type: "image",
                accept: { "image/png": true }
            },

            {
                source: "title",
                type: "text",
                label:"Title"
            },
            {
                source: "body",
                type: "markdown",
                label: "Description"
            },
            {
                source: "slides",
                label:"Images and videos",
                type: "array",
                mode: "mediaplayer",
                xor: true,
                sub: [
                    {
                        source: "url",
                        label: "Youtube URL",
                        type: "text"
                    },
                    {
                        source: "image",
                        label: "Image",
                        type: "image",
                        accept: {
                            "image/jpeg": true,
                            "image/webp": "jpg",
                            "image/png": "jpg"
                        }
                        /*transforms: {
                            _original: {
                                width: 700,
                                height: 470
                            }
                        }*/
                    }
                ]
            },
        ]
    },
    ...require("../groups/metaTags.js"),
];
