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
    console.log(user)
    res.json({ user: user, accessToken: accessToken })
})

router.put("/updateUser", auth, async (req, res) => {
    const username = req.body.username
    const password = await bcrypt.hash(req.body.password, 10)
    const phone_number = req.body.phone_number

    try {
        await userDB.updateUser(req.user.email, username, password, phone_number)
        res.json({ error: false })
    } catch (error) {
        res.json({ error: true })
    }



})

module.exports = router