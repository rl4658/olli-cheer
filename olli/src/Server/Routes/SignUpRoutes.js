const express = require('express');
require('dotenv').config();
const userDB = require("../Database/UsersDB.js")
const router = express.Router();
const bcrypt = require('bcrypt')

router.use(express.json());

router.post("/addUser", async (req, res) => {
    const [user, child] = req.body

    const password = await bcrypt.hash(user.password, 10)
    try {
        const dbResponse = await userDB.insertUser(user.email, user.username, password, user.fName, user.lName, user.user_type, user.phone_number, child)
        if (dbResponse.error) {
            res.json(dbResponse)
            return
        }
        res.json({ error: false })
        return

    } catch (error) {
        throw error
    }

})



module.exports = router