module.exports = {
    source: "inherit",
    label: "Inheriting settings",
    help: "Settings which, unless overwritten here, are inherited from parent nodes according to the following hierarchy: (1) Global website settings > (2) Top category > (3) Subcategories > (4) Product page",
    type: "array",
    mode: "group",
    min: 1,
    max: 1,
    sub: [{
        source: "deals", label: "Alex block", type: "array", max: 3, sub: [{
            source: "product_id", type: "reference", label: "Product", reference: {
                resource: "product", optionText: "title", inputType: "autocomplete"
            }
        },]
    }, {
        source: "faq", label: "FAQ", type: "array", sub: [{
            source: "q", label: "Question", type: "text"
        }, {
            source: "a", label: "Answer", type: "markdown", props: {
                small: true
            }
        }]

    }]
};
