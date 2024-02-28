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
    console.log(user)
    if (user === null) {
        res.status(404).json({ error: "Server Error: Incorrect Email Address" })
        return
    }
    const match = await bcrypt.compare(password, user.password)

    if (match) {
        const token = jwt.sign(user, process.env.jwtSecret, { expiresIn: '1h' })
        res.json({ user: user, accessToken: token, error: false })
        return
    }
    else {
        res.status(404).json({ error: "Server Error: Incorrect password" })
        return
    }
});




// this route will look for a SN user given a username and and two urls' (password)
// then return the result: the SN user info if found, or not found message if there is no existing user. 

router.post("/SNUserLogin", async (req, res) => {

    try {
        const { username, image1, image2 } = req.body;
        const user = await userDB.getSNByUsername(username);


        if (user === null) {
            res.status(404).json({ error: true })
            return
        }
        if (user.username !== username) {
            res.status(404).json({ error: true })
            return
        }
        if (user.image1 !== image1 || user.image2 !== image2) {
            res.status(404).json({ error: true })
            return
        }
        const token = jwt.sign(user, process.env.jwtSecret, { expiresIn: '1h' })
        res.json({ user: user, accessToken: token })
        return
    } catch (err) {
        res.status(404).json({ error: true })
        return
    }

})












// Export router
module.exports = router;