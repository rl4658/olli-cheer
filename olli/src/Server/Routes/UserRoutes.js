const express = require('express');
require('dotenv').config();
const userDB = require("../Database/UsersDB.js")
const auth = require("../Helpers/JwtAuth.js")
const router = express.Router();
router.use(express.json());
const bcrypt = require("bcrypt");

router.get('/getUser/:email', auth, async (req, res) => {
    const email = req.params.email;
    const user = await userDB.getUserByEmail(email);
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];
    if (!user) {
        return res.json(null)
    }

    res.json({ user: user, accessToken: accessToken })
})


// NOTE I have removed auth temporarily 
router.put("/updateUser", async (req, res) => {
    const username = req.body.username
    const password = await bcrypt.hash(req.body.password, 10)
    const phone_number = req.body.phone_number

    console.log("Update user has been called, these are the given values: username: " + username + "password: " + password + "phone number: " + phone_number)

    try {
        await userDB.updateUser(req.body.email, username, password, phone_number)
        res.json({ error: false })
    } catch (error) {
        console.log("Error updating user: " + error);
        console.log()
        res.json({ error: true })
    }

})



// NOTE I have removed auth temporarily 
router.put("/updateUserUsingAdmin", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const phone_number = req.body.phone_number
    const newEmail = req.body.newEmail
    const prevEmail = req.body.prevEmail


    console.log("New email: " + newEmail + "prevEmail: " + prevEmail)
    console.log("Update user has been called, these are the given values: username: " + username + "password: " + password + "phone number: " + phone_number)

    try {
        await userDB.updateUserUsingAdmin(username, password, phone_number, newEmail, prevEmail)
        res.json({ error: false })
    } catch (error) {
        console.log("Error updating user: " + error);

        res.json({ error: true })
    }

})





module.exports = router