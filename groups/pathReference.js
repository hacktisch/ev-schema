module.exports = {
    tab: "main",
    source: "path",
    type: "reference",
    label: "Path",
    multiple: "true",
    filter: {
        product_id: "IS NULL",
        article_id: "IS NULL",
        page_id: "IS NULL"
    },
    reference: {
        resource: "path",
        optionText: "path",
        inputType: "autocomplete",
        quickCreate: true
    }

    ///////////  validate: required
};
