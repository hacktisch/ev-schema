module.exports = [
    { label: "Page title", type: "text", source: "title" },
    {
        label: "Top text",
        source: "top_text",
        type: "richtext"
    },

    {
        source: "steps",
        type: "array",
        min: 4,
        max: 4,
        sub: [
            {
                source: "description",
                label: "Description",
                type: "richtext"
            }
        ]
    },
        {
        label: "Bottom text",
        source: "bottom_text",
        type: "richtext"
    },
];
