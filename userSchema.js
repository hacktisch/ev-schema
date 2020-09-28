module.exports = [
   {
      
        source: "username",
        type: "text",
        label: "Username"
    },
    {
      
        source: "password",
        type: "password",
        label: "Password",
        validate:[{
                        type:"length",
                        min:8
                    }]
    },


    require("./groups/changed.js")
];
