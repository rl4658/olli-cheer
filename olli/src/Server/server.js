const express = require('express');
const http = require('http'); // Import http module
const socketIo = require('socket.io'); // Import socket.io module
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
const server = http.createServer(app); // Create a HTTP server instance
const io = socketIo(server); // Attach socket.io to the HTTP server

app.use(cors())
app.use("/login", loginRoutes)
app.use("/signUp", signUpRoutes)
app.use("/events", eventRoutes)
app.use("/parentalControls", parentalControlsRoutes)
app.use("/users", userRoutes)
app.use("/adminControls", adminControlRoutes)
app.use("/email", emailRoutes)
app.use("/newsletters", newsletterRoutes)


//
app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        io.to(data).emit("user_joined", { user: socket.id, room: data });
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

