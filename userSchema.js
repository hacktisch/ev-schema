const { roles } = require("./structure");

module.exports = [
    {
        source: "name",
        type: "text",
        label: "Full name",
        validate: ["required"]
    },
    {
        source: "email",
        type: "email",
        label: "Email address",
        validate: ["email"]
    },
    {
        source: "role",
        type: "select",
        label: "Role",
        choices: roles,
        validate: ["required"],
        props: {
            defaultValue: "supplier"
        }
    },
    {
        source: "gender",
        type: "select",
        label: "Avatar",
        choices: [
           // { id: "human", name: "Human" },
           // { id: "female", name: "Female" },
           // { id: "male", name: "Male" },
            { id: "fun-emoji", name: "Square" },
            { id: "bottts", name: "Robot" },
            { id: "miniavs", name: "Person" },
            { id: "pixel-art", name: "Pixel" },
            //{ id: "gridy", name: "Genderfluid" }
        ],
        props: {
            defaultValue: "fun-emoji"
        },
        validate: ["required"],
        mode: "avatar",
        seed: "name"
    },
    {
        source: "password",
        type: "password",
        label: "Password",
        validate: [
            {
                type: "length",
                min: 8
            }
        ]
    },
    require("./groups/changed.js")
];
