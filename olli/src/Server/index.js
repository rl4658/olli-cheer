const express = require('express');
const loginRoute = require("./Routes/Login.js")
const signUpRoute = require("./Routes/SignUp.js")
require('dotenv').config();


const app = express();

app.use("/login", loginRoute)
app.use("/signUp", signUpRoute)







const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

