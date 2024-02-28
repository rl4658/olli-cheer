const express = require('express');
require('dotenv').config();
const userDB = require("../Database/UsersDB.js")
const auth = require("../Helpers/JwtAuth.js")
const router = express.Router();
const jwt = require('jsonwebtoken');
router.use(express.json());


router.get("/getSNOfParent/:email", auth, async (req, res) => {

    try {
        const parentEmail = req.params.email
        console.log(parentEmail)
        const SNUsers = await userDB.getSNByParentEmail(parentEmail)
        SNUsers ? res.json(SNUsers) : res.json({ error: true })
    } catch (error) {
        res.json({ error: true })
    }

})

router.delete("/deleteSN/:username", auth, async (req, res) => {
    try {
        const username = req.params.username

        const response = await userDB.deleteSN(username)
        console.log(response);
        if (response === null) {
            res.json({ error: true })
            return
        }
        res.json()
    } catch (error) {
        res.json({ error: true })
    }
})

router.put("/updateSN", auth, async (req, res) => {

    const oldUsername = req.body.oldUsername
    const newUserName = req.body.newUsername
    const email = req.body.email
    const image1 = req.body.image1
    const image2 = req.body.image2
    const firstName = req.body.fName
    const lastName = req.body.lName

    console.log(oldUsername)
    console.log(newUserName)
    try {

        const response = await userDB.updateSN(oldUsername, newUserName, email, image1, image2, firstName, lastName)

        if (response) {
            res.json({ error: false })
        }
        else {
            res.json({ error: true })
            return

        }
    } catch (err) {
        res.json({ error: true })
    }
})

module.exports = router