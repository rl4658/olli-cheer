const express = require('express');
require('dotenv').config();
const userDB = require("../Database/UsersDB.js")
const auth = require("../Helpers/JwtAuth.js")
const router = express.Router();
const jwt = require('jsonwebtoken');
router.use(express.json());



// returns all of the parents. NOTE, removed auth temporarily. 
router.get('/getParents', async (req, res) => {
    console.log("getAllParents called"); 
    try{
        const users = await userDB.getAllParents(); 
		users.forEach(user => console.log(user));

        return res.json({users}); 
    } catch(e) { 
        (console.log('Unable to get parents.' + e))
    }
})


// NOTE there is no auth
router.delete("/deleteUser/:email", async (req, res) => {
    try {
        const email = req.params.email

        const response = await userDB.deleteUser(email)
        console.log(response);
        if (response === null) {
            res.json({ error: true })
            return
        }
        res.json({ error: false })
    } catch (error) {
        res.json({ error: true })
    }
})


module.exports = router