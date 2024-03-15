const express = require('express');
require('dotenv').config();
const userDB = require("../Database/UsersDB.js")
const router = express.Router();
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');

router.use(express.json());

// router.post("/addUser", async (req, res) => {
//     const [user, child] = req.body

//     const password = await bcrypt.hash(user.password, 10)
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'pykelol5437@gmail.com',
//           pass: 'nmcm ufcb rbvu jbhq',
//         },
//       });
//       const verificationLink = `http://localhost:8080/verify/${user.username}`;
//       const mailOptions = {
//         from: 'pykelol5437@gmail.com',
//         to: user.email
//         subject: 'Email Verification',
//         text: `Click the following link to verify your email: ${verificationLink}`,
//       };
//       await transporter.sendMail(mailOptions).then().catch();
//       res.send({message : 'Email Sent'})
//     try {
//         const dbResponse = await userDB.insertUser(user.email, user.username, password, user.fName, user.lName, user.user_type, user.phone_number, child)
//         if (dbResponse.error) {
//             res.json(dbResponse)
//             return
//         }
//         res.json({ error: false })
//         return

//     } catch (error) {
//         throw error
//     }

// })



module.exports = router