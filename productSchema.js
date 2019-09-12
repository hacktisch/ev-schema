module.exports = [
    {
        tab: "main",
        source: "title",
        type: "text"
        /////////validate: required
    },

    {
        tab: "main",
        source: "path",
        type: "reference",
        label: "Path",
        multiple:"true",
        reference: {
            resource: "path",
            optionText: "path",
            inputType: "autocomplete",
            quickCreate: true
        }

        ///////////  validate: required
    },
    {
        tab: "main",
        source: "published",
        type: "boolean",
        props: {
            defaultValue: true
        }
    },
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
        type: "richtext",
        label: "Long description"
    },

    {
        tab: "media",
        label: "Main image",
        source: "mainImage",
        type: "image"
        /////////validate: required
    },
    {
        tab: "media",
        source: "slides",
        type: "mediaplayer"
        //slide imgs alt?...
    },

    {
        tab: "catalog",
        source: "price",
        type: "number",
        render:"price"
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
        /////////validate: required
        label: "Category",
        root: "main",
        reference: {
            resource: "tree",
            optionText: "text"
        }
    },
    {
        tab: "catalog",
        source: "occasion",
        type: "reference",
        label: "Occasion",
        root: "occasion",
        reference: {
            resource: "tree",
            optionText: "text"
        }
    },
    {
        tab: "catalog",
        source: "genre",
        type: "reference",
        label: "Genre",
        root: "genre",
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

    {
        tab: "meta",
        source: "meta",
        label: "Meta tags",
        type: "array",
        min: 1,
        max: 1,
        sub: [
            {
                source: "title",
                label: "Title meta tag",
                type: "longtext"
            },
            {
                source: "description",
                label: "Description meta tag",
                type: "longtext"
            }
        ]
    },
    {
        tab: "meta",
        source: "created",
        label: "Creation date",
        type: "datetime"
    }
];
