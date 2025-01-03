import admin from "firebase-admin";
import express from "express";
import bodyParser from "body-parser";
import serviceAccount from "../config/serviceAccountKey.json" assert { type: "json" };


const router = express.Router();
router.use(bodyParser.json());

// Firebase Admin SDK initialize karein
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// OTP Send karne ka endpoint
// router.post("/send-otp", async (req, res) => {
//   const phoneNumber = req.body.phoneNumber;

//   try {
//     const session = await admin.auth().createSessionCookie(phoneNumber, {
//       expiresIn: 60 * 5 * 1000, // 5 minutes
//     });
//     res.status(200).send({ session });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// });
 
router.get('/' ,(req , res) =>{
    res.send('otp chal raha hai')
} )

// OTP Verify karne ka endpoint
// router.post("/verify-otp", async (req, res) => {
//     const { phoneNumber, otp } = req.body;

//     try {
//         const check = await admin.auth().verifyIdToken(otp);
//         if (check.phone_number === phoneNumber) {
//             res.send({ message: "OTP verified successfully" });
//         } else {
//             res.status(400).send({ error: "Invalid OTP" });
//         }
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// });

export default router


