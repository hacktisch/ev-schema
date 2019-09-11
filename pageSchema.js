module.exports = [
    {
        tab: "main",
        source: "title",
        type: "text"
        /////////validate: required
    },

    {
        tab: "main",
        source: "path.id",
        type: "reference",
        label: "Path",
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
        source: "body",
        type: "richtext",
        label: "Long description"
    },

   
];
