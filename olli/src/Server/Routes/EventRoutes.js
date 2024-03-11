const express = require('express');
require('dotenv').config();
const eventDB = require("../Database/EventsDB.js")
const auth = require("../Helpers/JwtAuth.js")

const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
router.use(express.json());


// Route to get event by title
router.get('/getEvent/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const event = await eventDB.getEventByTitle(title);

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        return res.json(event);
    } catch (error) {
        console.error('Error retrieving event:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});



// Route to insert event
router.post('/addEvent', async (req, res) => {
    const { title, descrip, shortDescrip, image } = req.body;

    try {
        await eventDB.insertEvent(title, descrip, shortDescrip, image);
        return res.status(201).json({ message: "Event inserted successfully" });
    } catch (error) {
        console.error('Error inserting event:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});

// Route to sign up for an event
router.post('/eventSignUp', async (req, res) => {
    const { pickTime, dropTime, title, username } = req.body;

    try {
        await eventDB.EventSignUp(pickTime, dropTime, title, username);
        return res.status(201).json({ message: `${username} has signed up for ${title}` });
    } catch (error) {
        console.error('Error signing up for event:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;