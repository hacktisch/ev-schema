const { menus } = require("./structure");

module.exports = [
    {
        source: "root",
        type: "select",
        label: "Tree",
        choices: menus,

        validate: ["required"]
    },
    {
        source: "text",
        type: "text",
        label: "Shown text",

        validate: ["required"]
    },
    {
        source: "path_id",
        type: "reference",
        label: "Path",
        reference: {
            resource: "path",
            optionText: "path",
            inputType: "autocomplete",
            quickCreate: true
        },

        validate: ["required"]
    },
    {
        source: "parent",
        type: "reference",
        label: "Parent",
        reference: {
            resource: "tree",
            optionText: "text"
        },
        props: {
            resettable: true
        }
    },
    {
        source: "weight",
        type: "number",
        validate: ["required"],
        props: {
            defaultValue: 0
        }
    },
    {
        label:"Icon",
        source: "image",
        type: "image",
        accept: ["image/svg+xml", "image/png", "image/webp"],
        transforms: {
            _original: {
                width: 100,
                height: 100
            }
        }
    }
];
