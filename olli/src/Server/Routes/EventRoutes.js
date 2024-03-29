const express = require('express');
require('dotenv').config();
const eventDB = require("../Database/EventsDB.js")
const auth = require("../Helpers/JwtAuth.js")
const multer = require('multer'); // used for image uploading
const router = express.Router();

router.use(express.json());


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "../../src/assets/EventPhotos")
    },
    filename: function (req, file, cb) {
        return cb(null, `${file.originalname}`)
    }
})
const upload = multer({ storage })// Define a destination folder for uploaded files


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


// used to upload an event image. // ADD AUTH
router.post('/uploadImage', upload.single('file'), (req, res) => {
    res.json()
});



// Route to insert event
router.post('/addEvent', async (req, res) => {

    const { title, descrip, shortDescrip, path, start, end } = req.body;
    //console.log('Title: ' + title + 'Description: ' + descrip + 'Short Description: ' + shortDescrip + ' Image path: ' + path + 'start: ' + start + 'End: ' + end);
    try {

        await eventDB.insertEvent(title, descrip, shortDescrip, path, start, end);
        return res.status(201).json({ message: "Event inserted successfully" });
    } catch (error) {
        console.error('Error inserting event:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});



// delete event using event title (primary key)
router.delete('/deleteEvent', async (req, res) => {
    const { title } = req.body;
    //console.log('This is the title received: ' + title)
    try {
        await eventDB.deleteEvent(title);
        return res.json({ key: "success" });
    } catch (error) {
        console.error('Error retrieving event:', error);
        return res.json({ key: "failure" })
    }
});


// Route to get all of the events. 
router.get('/getAllEvents', async (req, res) => {
    try {
        const events = await eventDB.getAllEvents(); // should be an array. 
        return res.json(events); // should be an array. 
    } catch (error) {
        console.error('Error gettings events:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});

router.get('/getAllParticipants', async (req, res) => {
    try {
        const participants = await eventDB.getAllParticipants();
        return res.json(participants);
    } catch (error) {
        console.error('Error gettings participansts:', error);
        return res.status(500).json({ error: "Server Error" });
    }
})

router.post('/updateEventPhoto', async (req, res) => {
    const { title, path } = req.body;
    console.log('Title!!: ' + title + 'Path!!: ' + path);
    try {
        await eventDB.updateEventPhoto(title, path);
        return res.json({ message: 'Succussefully updated event photo' });
    } catch (error) {
        console.error('Error updating photo:', error);
        return res.status(500).json({ error: "Server Error" });
    }
})

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