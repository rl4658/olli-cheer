const express = require('express');
const router = express.Router();
const newsletterDB = require("../Database/NewsLetterDB.js");
const auth = require("../Helpers/JwtAuth.js")
router.use(express.json());
const fs = require('fs')
// Route to add a new newsletter image
router.post('/addNewsletter', auth, async (req, res) => {
    const { image_name, path } = req.body;
    try {
        await newsletterDB.addNewsletter(image_name, 0, path);
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

router.delete('/remove/:image_name', auth, async (req, res) => {
    const image_name = req.params.image_name
    try {
        await newsletterDB.deleteLetter(image_name)
        fs.unlinkSync("../../src/assets/Newsletters/" + image_name)
        res.json()
    } catch (error) {
        console.log(error)
    }
})

router.put("/setCurrent/:image_name", auth, async (req, res) => {
    const image_name = req.params.image_name
    await newsletterDB.setCurrentLetter(image_name)
    res.json()
})

//returns array 
router.get('/getPast', auth, async (req, res) => {
    try {
        const pastNewsletterImages = await newsletterDB.getPastNewsletterImage()

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
