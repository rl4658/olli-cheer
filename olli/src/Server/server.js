const express = require('express');
const loginRoutes = require("./Routes/LoginRoutes.js")
const signUpRoutes = require("./Routes/SignUpRoutes.js")
const eventRoutes = require("./Routes/EventRoutes.js")
const parentalControlsRoutes = require("./Routes/ParentalControl.js")
const userRoutes = require('./Routes/UserRoutes.js')
const adminControlRoutes = require('./Routes/AdminControls.js')
const emailRoutes = require("./Routes/EmailRoutes.js")
const newsletterRoutes = require("./Routes/NewsLetter.js")
const cors = require('cors')
require('dotenv').config();


const app = express();
app.use(cors())
app.use("/login", loginRoutes)
app.use("/signUp", signUpRoutes)
app.use("/events", eventRoutes)
app.use("/parentalControls", parentalControlsRoutes)
app.use("/users", userRoutes)
app.use("/adminControls", adminControlRoutes)
app.use("/email", emailRoutes)
app.use("/newsletters", newsletterRoutes)


app.use(express.static('public'));



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

