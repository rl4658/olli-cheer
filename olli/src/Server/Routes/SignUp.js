const express = require('express');
require('dotenv').config();
const userDB = require("../Database/Users.js")
const router = express.Router();
const bcrypt = require('bcrypt')

router.use(express.json());

router.post("/addUser", async (req, res) => {
    const [user, child] = req.body
    const password = await bcrypt.hash(user.password, 10)
    try {
        await userDB.insertUser(user.email, user.username, password, user.fName, user.lName, user.user_type, user.phone_number, child)
        res.json()
    } catch (error) {
        res.status(400).json({ error: "Server Error: could not add user" })
    }

})

module.exports = router