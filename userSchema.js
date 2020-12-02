module.exports = [
    {
        source: "username",
        type: "text",
        label: "Username",
        mode: "avatar"
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
