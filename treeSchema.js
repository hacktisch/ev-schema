const {menus} = require("./structure");

module.exports = [{
    source: "root", type: "select", label: "Tree", choices: menus,

    validate: ["required"]
}, {
    source: "text", type: "text", label: "Shown text",

    validate: ["required"]
}, {
    source: "path_id", type: "reference", label: "Path", filter: {
        weight: 0
    }, reference: {
        resource: "path", optionText: "path", inputType: "autocomplete"
    }, props: {
        sort: {field: "length(path)", order: "ASC"}
    }, validate: ["required"]
},
    {
    source: "parent", type: "reference", label: "Parent", reference: {
        resource: "tree", optionText: "text"
    }, props: {
        resettable: true, sort: {field: "weight", order: "ASC"}
    }
}, {
    source: "weight", type: "number", validate: ["required"], props: {
        defaultValue: 0
    }
}, {
    label: "Icon", source: "image", type: "image", accept: {
        "image/svg+xml": true, "image/jpeg": true, "image/webp": "png", "image/png": true
    }, /*transforms: {
            _original: {
                width: 80,
                height: 80
            }
        }*/
},


    {
        source: "trickledowns",
        label: "Trickle Down",
        help: "Settings which, unless overwritten here, are inherited from parent nodes according to the following hierarchy: (1) Global website settings > (2) Top category > (3) Subcategories > (4) Product page",
        type: "group",
        mode: "array",
        min: 1,
        max: 1,
        sub: [{

            source: "deals", label: "Alex block", type: "array", max: 3, sub: [{
                source: "product_id", type: "reference", label: "Product", reference: {
                    resource: "product", optionText: "title", inputType: "autocomplete"
                }
            },]
        }

            , {


                source: "faq", label: "FAQ", type: "array", sub: [{
                    source: "q", label: "Question", type: "text"
                }, {
                    source: "a", label: "Answer", type: "markdown", props: {
                        small: true
                    }
                }]

            }

        ]
    }];
