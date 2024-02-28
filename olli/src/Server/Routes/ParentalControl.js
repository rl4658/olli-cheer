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

router.put("/updateSN", auth, async (req, res) => {

    const username = req.body.username
    const email = req.body.email
    const image1 = req.body.image1
    const image2 = req.body.image2
    const firstName = req.body.fName
    const lastName = req.body.lName

    try {
        const response = await userDB.updateSN(username, email, image1, image2, firstName, lastName)
        console.log(response)
        if (response) {
            res.json()
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