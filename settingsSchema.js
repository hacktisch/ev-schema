const localeKeys = [
    "GENRES",
    "ORDER_DESC_ADDED",
    "ORDER_DESC_CONCIERGE",
    "ORDER_DESC_DEFAULT",
    "REPERTOIRE",
    "SONGS"
];

const localeFields = localeKeys.map(key => ({
    tab: "locale",
    source: "locale:" + key,
    type: "longtext",
    label: key
}));

module.exports = [
    {
        tab: "general",
        source: "social_links",
        type: "array",
        sub: [
            {
                source: "type",
                label: "Platform",
                type: "select",
                choices: [
                    "Facebook",
                    "Twitter",
                    "Youtube",
                    "Instagram",
                    "Linkedin"
                ].map(name => ({
                    id: name.toLowerCase(),
                    name,
                    icon: "/icons/social-" + name.toLowerCase() + ".svg"
                }))
            },
            {
                source: "url",
                label: "URL",
                type: "text"
            }
        ]
    },
    {
        tab: "general",
        source: "phone_info",
        type: "richtext",
        label: "Contact info block"
    },
    {
        tab: "general",
        source: "usps",
        label: "USP's",
        type: "array",
        sub: [
            {
                source: "title",
                label: "Title",
                type: "text"
            },
            {
                source: "text",
                label: "Description",
                type: "longtext"
            },
            {
                label: "Icon",
                source: "icon",
                type: "image",
                accept: {
                    "image/svg+xml": true,
                    "image/jpeg": true,
                    "image/webp": "png",
                    "image/png": true
                },
                transforms: {
                    _original: {
                        width: 80,
                        height: 80
                    }
                }
            }
        ]
    },
    {
        tab: "settings",
        source: "constants:phone",
        label: "Phone number",
        type: "text"
    },
    {
        tab: "settings",
        source: "constants:currency",
        label: "Currency code",
        type: "text"
    },
    {
        tab: "settings",
        source: "constants:goto",
        label: "Order completed path",
        type: "text",
        props: {
            disabled: true,
            placeholder: "/checkout/thank-you"
        }
    },
    {
        tab: "settings",
        source: "constants:rangeMin",
        label: "Minimum in price range filter",
        type: "number"
    },
    {
        tab: "settings",
        source: "constants:rangeMax",
        label: "Maximum in price range filter",
        type: "number"
    },
    {
        tab: "settings",
        source: "constants:searchPath",
        label: "Search path prefix",
        type: "text",
        props: {
            placeholder: "/search"
        }
    },
    ...localeFields,
     {
                label: "Titleeeeee",
                source: "mail:custredwerdeomer_order_title",
                type: "text"
            },
    {
        tab: "mail",
        label: "Request confirmation to customer",
        type: "group",
        sub: [
            {
                label: "Title",
                source: "mail:customer_order_title",
                type: "text"
            },
            {
                label: "Message",
                source: "mail:customer_order_body",
                type: "richtext"
            }
        ]
    }
];
