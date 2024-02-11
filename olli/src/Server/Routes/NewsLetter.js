const express = require('express');
const router = express.Router();
const newsletterDB = require("../Database/Newsletter.js");

router.use(express.json());

// Route to add a new newsletter image
router.post('/addNewsletter', async (req, res) => {
    const { letterName, image } = req.body;

    try {
        await newsletterDB.addNewsletterImage(letterName, image, true);
        return res.status(201).json({ message: "Newsletter pdf added successfully" });
    } catch (error) {
        console.error('Error adding newsletter image:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});

// Route to get the current newsletter image
router.get('/getCurrent', async (req, res) => {
    try {
        const currentNewsletterImage = await newsletterDB.getCurrentNewsletterImage();
        if (currentNewsletterImage) {
            return res.json(currentNewsletterImage);
        } else {
            return res.status(404).json({ error: "No current newsletter image found" });
        }
    } catch (error) {
        console.error('Error getting current newsletter image:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});

//returns array 
router.get('/getPast', async (req, res) => {
    try {
        const pastNewsletterImages = await newsletterDB.getPastNewsletterImages();
        if (pastNewsletterImages.length > 0) {
            return res.json(pastNewsletterImages);
        } else {
            return res.status(404).json({ error: "No past newsletter images found" });
        }
    } catch (error) {
        console.error('Error getting past newsletter images:', error);
        return res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
