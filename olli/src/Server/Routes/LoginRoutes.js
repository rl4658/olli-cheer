const express = require('express');
require('dotenv').config();
const userDB = require("../Database/UsersDB.js")

const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
router.use(express.json());

// return user object
router.get('/:email/:password', async (req, res) => {
    const email = req.params.email
    const password = req.params.password
    const user = await userDB.getUserByEmail(email)
    if (user === null) {
        res.status(404).json({ error: "Server Error: Incorrect Email Address" })
        return
    }
    const match = await bcrypt.compare(password, user.password)

    if (match) {
        const token = jwt.sign(user, process.env.jwtSecret, { expiresIn: '1h' })
        res.json({ user: user, accessToken: token })
        return
    }
    else {
        res.status(404).json({ error: "Server Error: Incorrect password" })
        return
    }
});


// Export router
module.exports = router;