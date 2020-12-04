module.exports = [
    {
        source: "username",
        type: "text",
        label: "Username"
    },
    {
        source: "gender",
        type: "select",
        label: "Gender",
        choices: [
            { id: "human", name: "Human" },
            { id: "female", name: "Female" },
            { id: "male", name: "Male" },
            { id: "bottts", name: "Robot" },
            { id: "gridy", name: "Genderfluid" }
        ],
        props: {
            defaultValue: "human"
        },

        validate: ["required"],
        mode: "avatar",
        seed: "username"
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
