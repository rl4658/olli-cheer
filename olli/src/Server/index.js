const express = require('express');
const loginRoutes = require("./Routes/LoginRoutes.js")
const signUpRoutes = require("./Routes/SignUpRoutes.js")
const eventRoutes = require("./Routes/EventRoutes.js")
require('dotenv').config();


const app = express();

app.use("/login", loginRoutes)
app.use("/signUp", signUpRoutes)
app.use("/events", eventRoutes)







const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

