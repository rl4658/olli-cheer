const express = require('express');
require('dotenv').config();
const userDB = require("../Database/UsersDB.js")
const auth = require("../Helpers/JwtAuth.js")
const router = express.Router();
const jwt = require('jsonwebtoken');
router.use(express.json());
const fs = require('fs')
const nodemailer = require('nodemailer');

router.get('/verify/:email', async (req, res) => {
    const email = req.params.email;
    console.log(email)
    // Update user status to "verified"
    try {

        await userDB.updateVerification(email);
    }
    catch (err) {
        console.log(`Error in verify route: ${err}`);
        res.status(401).json({ error: 'User Cannot Be Verified' })
        return
    }
    res.json({ message: 'Email verified successfully.' });
});

router.post('/sendNewsLetter', auth, async (req, res) => {
    const subscriberEmails = await userDB.getSubscribedEmails()
    const path = req.body.path
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pykelol5437@gmail.com',
            pass: 'nmcm ufcb rbvu jbhq',
        },

    });
    const htmlContent = `
            <html>
                <body>
                    <h2>Olli News</h2>
                    <embed src="data:application/pdf;base64,${getBase64EncodedPDF(path)}" width="100%" height="500px" />
                </body>
            </html>
        `;

    const mailOptions = {
        from: 'pykelol5437@gmail.com',
        to: subscriberEmails.join(', '),
        subject: 'Olli News',
        html: htmlContent
    };
    await transporter.sendMail(mailOptions)
    res.json()

})

function getBase64EncodedPDF(pdfFilePath) {
    const pdfContent = fs.readFileSync(pdfFilePath, { encoding: 'base64' });
    return pdfContent;
}

module.exports = router